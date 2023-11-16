import React, { useState } from "react";
import { ArrowLeft } from "../static/icon";
import { DragDropContext } from "react-beautiful-dnd";
import { CandidateData } from "../data/KanbanData";
import CandidateList from "./candidate/CandidateList";

const Project = () => {
  const [avuaRecommended, setAvuaRecommended] = useState(
    CandidateData[0].candiadtes.filter(
      (candiadte) => candiadte.status === "avua Recommended"
    )
  );
  const [otherCandidate, setOtherCandidate] = useState(
    CandidateData[0].candiadtes.filter(
      (candiadte) => candiadte.status === "Other Candidate"
    )
  );
  const [Shortlist, setShortlist] = useState(
    CandidateData[0].candiadtes.filter(
      (candiadte) => candiadte.status === "Shortlist"
    )
  );
  const [Interview, setInterview] = useState(
    CandidateData[0].candiadtes.filter(
      (candiadte) => candiadte.status === "Interview"
    )
  );
  //   const [AddOther, SetAddOther] = useState("Add Other");

  const findCandidateById = (id, array) => {
    return array.find((candiadte) => candiadte.id === id);
  };

  const removeCandidateById = (id, array) => {
    return array.filter((candiadte) => candiadte.id !== id);
  };

  const handleDrag = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId === destination.droppableId) return;

    if (source.droppableId === "1") {
      setAvuaRecommended(removeCandidateById(draggableId, avuaRecommended));
    } else if (source.droppableId === "2") {
      setOtherCandidate(removeCandidateById(draggableId, otherCandidate));
    } else if (source.droppableId === "3") {
      setShortlist(removeCandidateById(draggableId, Shortlist));
    } else if (source.droppableId === "4") {
      setInterview(removeCandidateById(draggableId, Interview));
    }
    // else {
    //   SetAddOther(removeTodoById(draggableId, AddOther));
    // }

    const todo = findCandidateById(draggableId, [
      ...avuaRecommended,
      ...otherCandidate,
      ...Shortlist,
      ...Interview,
      //   ...AddOther,
    ]);

    if (destination.droppableId === "1") {
      setAvuaRecommended([
        { ...todo, status: "not started" },
        ...avuaRecommended,
      ]);
    } else if (destination.droppableId === "2") {
      setOtherCandidate([{ ...todo, status: "started" }, ...otherCandidate]);
    } else if (destination.droppableId === "3") {
      setShortlist([{ ...todo, status: "completed" }, ...Shortlist]);
    } else if (destination.droppableId === "4") {
      setInterview([{ ...todo, status: "completed" }, ...Interview]);
    }
    // else {
    //   SetAddOther([{ ...todo, status: "completed" }, ...AddOther]);
    // }
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-12">
      {/* Project Header */}
      <div className="w-full h-[3.5rem] flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:gap-0 mt-10">
        <div className="flex justify-between items-center h-[3.5rem]">
          <button className="w-[1.875rem] h-[1.875rem]">
            <img src={ArrowLeft} alt={ArrowLeft} className="w-[1.875rem]" />
          </button>
          <h1
            className="font-semibold text-black text-2xl lg:text-[1.875rem]"
            style={{ paddingLeft: "10px" }}
          >
            Job Candidate
          </h1>{" "}
          <span className="w-[8.8125rem] font-semibold">
            {" "}
            &nbsp; &nbsp; 10 Candidate
          </span>
        </div>
      </div>
      <DragDropContext onDragEnd={handleDrag}>
        <div className="mt-10 grid grid-flow-row auto-cols-fr lg:grid-flow-col gap-[10px]">
          <CandidateList
            candidatesList={avuaRecommended}
            type="avua-recommended"
            id={"1"}
          />
          <CandidateList
            candidatesList={otherCandidate}
            type="Other Candidate"
            id={"2"}
          />
          <CandidateList candidatesList={Shortlist} type="Shortlist" id={"3"} />
          <CandidateList candidatesList={Interview} type="Interview" id={"4"} />
          {/* <CandidateList candidatesList={AddOther} type="Add-Other" id={"5"} /> */}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Project;
