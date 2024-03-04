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
  LowerTableData,
  setLowerTableData,
  Branch,
  Year,
  selectedOption,
  setselectedOption,
}) {
  const [facultyname, setfacultyname] = useState("");
  const [sub, setsub] = useState("");
  const [sec, setsec] = useState("");
  const [isnofaculty, setisnofaculty] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("After updated", faculty);
    console.log("After updated faculty timings", facultytimings);
    console.log("Faculty Array table is ", facultyarraytable);
  }, [faculty, facultytimings, facultyarraytable]);

  function handleAdd(e) {
    e.preventDefault();
    // Client-side validation
    if (!facultyname || !sub || !sec) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    let newArray = [];
    if (subjects[sub][3]) {
      newArray = [sub, sec, true];
    } else {
      newArray = [sub, sec, false];
    }
    //let newArray = [sub, sec];
    setfaculty((prevfaculty) => {
      const updatedFaculty = { ...prevfaculty };
      if (prevfaculty[facultyname]) {
        updatedFaculty[facultyname] = [...prevfaculty[facultyname], newArray];
      } else {
        updatedFaculty[facultyname] = [newArray];
      }
      return updatedFaculty;
    });
    setfacultytimings((prevtimings) => {
      const updatedtimings = { ...prevtimings };
      if (!prevtimings[facultyname]) {
        updatedtimings[facultyname] = [];
      }
      return updatedtimings;
    });
    let newArray5 = [facultyname, sub, sec];
    setfacultyarraytable((prevtable) => [...prevtable, newArray5]);

    // Update LowerTableData
    if (LowerTableData && selectedOption["branch"] !== "BSH") {
      setLowerTableData((prevdata) => {
        const updatedData = { ...prevdata };
        if (!updatedData[Branch]) {
          updatedData[Branch] = {};
        }
        if (!updatedData[Branch][Year]) {
          updatedData[Branch][Year] = {};
        }
        if (!updatedData[Branch][Year][sec]) {
          updatedData[Branch][Year][sec] = {};
        }
        updatedData[Branch][Year][sec][sub] = [facultyname, subjects[sub][2]];
        return updatedData;
      });
    } else {
      setLowerTableData((prevdata) => {
        const updatedData = { ...prevdata };
        if (!updatedData["BSH"]) {
          updatedData["BSH"] = {};
        }
        if (!updatedData["BSH"][sec]) {
          updatedData["BSH"][sec] = {};
        }
        updatedData["BSH"][sec][sub] = [facultyname, subjects[sub][2]];
        return updatedData;
      });
    }

    setisfacultyalloted(true);
    setfacultyname("");
    setsub("");
    setsec("");
  }

  function handleFinish(e) {
    setisnofaculty(!isnofaculty);
    setdisplayingtimetable(!displayingtimetable);
  }

  return (
    <>
      {!isnofaculty && (
        <form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <label htmlFor="facultyname">Faculty Name:</label>
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
          <button type="button" onClick={(e) => handleAdd(e)}>
            Add
          </button>
          <button type="button" onClick={(e) => handleFinish(e)}>
            Finish
          </button>
        </form>
      )}
    </>
  );
}

export default Facultyrendering;
