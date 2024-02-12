import { useState } from "react";

function Subjectrendering({
  setsubjects,
  setissubjectsallocated,
  settableofsubjects,
}) {
  const [subject, setsubject] = useState("");
  const [duration, setduration] = useState("");
  const [occurences, setoccurences] = useState("");
  const [subjectsnotcompleted, setsubjectsnotcompleted] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setsubjects((prevsubjects) => ({
      ...prevsubjects,
      [subject]: [parseInt(duration, 10), parseInt(occurences, 10)],
    }));
    let newArray5 = [subject, parseInt(duration, 10), parseInt(occurences, 10)];
    settableofsubjects((prevsubjects) => [...prevsubjects, newArray5]);
    setsubject("");
    setduration("");
    setoccurences("");
  }

  function handleStop(e) {
    e.preventDefault();
    setsubjectsnotcompleted(false);
    setissubjectsallocated(true);
  }

  return (
    <>
      {subjectsnotcompleted && (
        <div className="subjectrendering">
          <label htmlFor="subjectname">Enter subject Name:</label>
          <input
            type="text"
            id="subjectname"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
          />
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={(e) => setduration(parseInt(e.target.value), 10)}
          />
          <label htmlFor="occurences">Occurences</label>
          <input
            type="text"
            id="occurences"
            value={occurences}
            onChange={(e) => setoccurences(parseInt(e.target.value), 10)}
          />
          <div className="button-group">
            <button onClick={(e) => handleSubmit(e)}>Add</button>
            <button onClick={(e) => handleStop(e)}>Finish</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Subjectrendering;
