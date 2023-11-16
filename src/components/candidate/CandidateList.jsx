import { Droppable } from "react-beautiful-dnd";
import { Bullet } from "../ui/Bullet";
import CandidateProfile from "./CandidateProfile";
import styles from "./CandidateList.module.css";

export default function CandidateList({ candidatesList, type, id }) {
  return (
    <div className={styles.candidateContainer}>
      <header
        className={`${styles.candiadteHeader} ${
          type === "avua-recommended"
            ? styles.notStarted
            : type === "Other Candidate"
            ? styles.notStarted
            : type === "Interview"
            ? styles.started
            : styles.completed
        }`}
      >
        <Bullet
          color={
            type === "avua-recommended"
              ? "#5030E5"
              : type === "Other Candidate"
              ? "#FFA500"
              : type === "Interview"
              ? "#FFA500"
              : "#76A5EA"
          }
        />
        <span>
          {type === "avua-recommended"
            ? "avua Recommended"
            : type === "Other Candidate"
            ? "Other Candidate"
            : type === "Shortlist"
            ? "Shortlist"
            : type === "Interview"
            ? "Interview"
            : "Add-Other"}
        </span>
        <span className="w-5 h-5 rounded-full bg-grey-light flex justify-center items-center text-xs font-medium text-dusky-black mx-1">
          {candidatesList.length}
        </span>
        {type === "avua-recommended" && (
          <button className="absolute top-[22px] right-[22px]">
            {/* <img
              src={AddSquare}
              alt={AddSquare}
              className="w-6 aspect-square"
            /> */}
          </button>
        )}
      </header>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
              className={styles.droppableArea}
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {candidatesList.map((candiadte, index) => (
                <CandidateProfile
                  key={candiadte.id}
                  id={candiadte.id.toString()}
                  candiadte={candiadte}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}
