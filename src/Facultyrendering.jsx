import { useState, useEffect } from "react";
function Facultyrendering({
  facultyarraytable,
  setfaculty,
  subjects,
  sections,
  setfacultytimings,
  faculty,
  facultytimings,
  setdisplayingtimetable,
  displayingtimetable,
  issubjectsallocated,
  setfacultyarraytable,
  setisfacultyalloted,
}) {
  const [facultyname, setfacultyname] = useState("");
  const [sub, setsub] = useState("");
  const [sec, setsec] = useState("");
  const [isnofaculty, setisnofaculty] = useState(false);

  // function handleAdd(e) {
  //   e.preventDefault();
  //   let newArray = [];
  //   newArray.push(sub);
  //   newArray.push(sec);
  //   setfaculty((prevfaculty) => {prevfaculty.has(facultyname)? {...prevfaculty,[facultyname].push(newArray)}:{...prevfaculty,[facultyname]:[newArray]}});
  // }
  function handleAdd(e) {
    e.preventDefault();
    let newArray = [sub, sec];
    setfaculty((prevfaculty) => {
      const updatedFaculty = { ...prevfaculty };
      if (prevfaculty[facultyname]) {
        updatedFaculty[facultyname] = [...prevfaculty[facultyname], newArray];
      } else {
        updatedFaculty[facultyname] = [newArray];
      }
      return updatedFaculty;
    });
    //console.log("After updated", faculty);
    setfacultytimings((prevtimings) => {
      const updatedtimings = { ...prevtimings };
      if (!prevtimings[facultyname]) {
        updatedtimings[facultyname] = [];
      }
      return updatedtimings;
    });
    let newArray5 = [facultyname, sub, sec];
    setfacultyarraytable((prevtable) => [...prevtable, newArray5]);
    setisfacultyalloted(true);
    (() => {
      setfacultyname("");
      setsub("");
      setsec("");
    })();
  }
  useEffect(() => {
    console.log("After updated", faculty);
    console.log("After updated faculty timings", facultytimings);
    console.log("Faculty Array table is ", facultyarraytable);
  }, [faculty, facultytimings, facultyarraytable]); // This useEffect will run whenever the faculty state changes

  function handleFinish(e) {
    setisnofaculty(!isnofaculty);
    setdisplayingtimetable(!displayingtimetable);
  }
  return (
    <>
      {!isnofaculty && (
        <form>
          <label htmlFor="facultyname">FacultyName:</label>
          <input
            type="text"
            id="facultyname"
            value={facultyname}
            onChange={(e) => setfacultyname(e.target.value)}
          />
          <label htmlFor="subject">Select Subject:</label>
          <select
            name="subject"
            id="subject"
            value={sub}
            onChange={(e) => setsub(e.target.value)}
          >
            <option value="">Select Subject</option>
            {Object.keys(subjects).map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <label htmlFor="section">Select Section:</label>
          <select
            name="section"
            id="section"
            value={sec}
            onChange={(e) => setsec(e.target.value)}
          >
            <option value="">Select Section</option>
            {sections.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
          <button type="button" id="add" onClick={(e) => handleAdd(e)}>
            Add
          </button>
          <button id="Finish" type="button" onClick={(e) => handleFinish(e)}>
            Finish
          </button>
        </form>
      )}
    </>
  );
}

export default Facultyrendering;
