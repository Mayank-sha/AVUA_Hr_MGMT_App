import { Draggable } from "react-beautiful-dnd";
import { Dots } from "../../static/icon";
import { User1 } from "../../static/avatars";
import styles from "./CandidateProfile.module.css";
import CandidateModal from "./CandidateModal";
import { useState } from "react";

export default function CandidateProfile({ candiadte, index }) {
  const [candidateModal, setCandidateModal] = useState(false);

  const openModal = () => {
    setCandidateModal(true);
  };

  return (
    <Draggable
      draggableId={candiadte.id.toString()}
      key={candiadte.id}
      index={index}
    >
      {(provided, snapshot) => {
        return (
          <div
            className={styles.candidate}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <header className={styles.candidateHeader}>
              <span
                className={`${styles.priority} ${
                  candiadte.status === "avua Recommended"
                    ? styles.completed
                    : candiadte.priority === "low"
                    ? styles.low
                    : styles.high
                }`}
              ></span>
              <img src={Dots} alt={Dots} />
            </header>
            <main className={styles.candidateInfo} onClick={openModal}>
              <img
                src={User1}
                className="border border-white rounded-full"
                width={"75px"}
                height={"75px"}
                // style={styles}
              />
              <h3>{candiadte.name}</h3>
              <h4>{candiadte.profession}</h4>
              <h5>{candiadte.companyName}</h5>
              <h5>{candiadte.city}</h5>
            </main>
            {candidateModal ? (
              <CandidateModal candidateModalFunc={setCandidateModal} />
            ) : null}
            <footer className={styles.footer}></footer>
            {provided.placeholder}
          </div>
        );
      }}
    </Draggable>
  );
}
