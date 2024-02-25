import { useState, useEffect } from "react";
import Sectionrendering from "./Sectionrendering";
import Subjects from "./Subjects";
import Subjectstable from "./Subjectstable";
import Facultyrendering from "./Facultyrendering";
import Algorithm from "./Algorithm";
import Facultytable from "./Facultytable";
import "./App.css";

function App({
  facultytimings,
  setfacultytimings,
  CollegeTimings,
  setCollegeTimings,
  Branch,
  Year,
  CollegeSubjects,
  setCollegeSubjects,
  setBranch,
  setYear,
  setdata,
  LowerTableData,
  setLowerTableData,
}) {
  const [count, setcount] = useState(0);
  const [sections, setsections] = useState([]);
  const [isfacultyalloted, setisfacultyalloted] = useState(false);
  const [issectionallotted, setissectionalloted] = useState(false);
  const [facultyarraytable, setfacultyarraytable] = useState([]);
  const [subjects, setsubjects] = useState({});
  const [tableofsubjects, settableofsubjects] = useState([]);
  const [issubjectsallocated, setissubjectsallocated] = useState(false);
  const [faculty, setfaculty] = useState({});
  //const [facultytimings, setfacultytimings] = useState({});
  const [sectiontimings, setsectiontimings] = useState({});
  const [displayingtimetable, setdisplayingtimetable] = useState(false);
  //Array.from({ length: count }, () => "hello")
  console.log("in App.jsx CollegeTimings are", CollegeTimings);
  console.log("in App.jsx setCollegeTimings are", setCollegeTimings);
  function handleCount(e, statefunction, string) {
    e.preventDefault();
    statefunction(parseInt(document.getElementById(`${string}`).value), 10);
  }
  useEffect(() => {
    setsections(Array.from({ length: count }, () => ""));
  }, [count]);
  console.log(sections);
  return (
    <form>
      <label htmlFor="sectioncount">Number of sections:</label>
      <input type="number" id="sectioncount" />
      <button onClick={(e) => handleCount(e, setcount, "sectioncount")}>
        Set
      </button>
      {count ? (
        <Sectionrendering
          sections={sections}
          setsections={setsections}
          setissectionalloted={setissectionalloted}
          sectiontimings={sectiontimings}
          setsectiontimings={setsectiontimings}
        />
      ) : null}
      {issectionallotted && (
        <Subjectstable
          settableofsubjects={settableofsubjects}
          tableofsubjects={tableofsubjects}
          setsubjects={setsubjects}
        />
      )}
      {issectionallotted && (
        <Subjects
          subjects={subjects}
          setsubjects={setsubjects}
          handleCount={handleCount}
          issectionallotted={issectionallotted}
          settableofsubjects={settableofsubjects}
          setissubjectsallocated={setissubjectsallocated}
        />
      )}
      {isfacultyalloted && (
        <Facultytable
          facultyarraytable={facultyarraytable}
          setfacultyarraytable={setfacultyarraytable}
          faculty={faculty}
          setfaculty={setfaculty}
          facultytimings={facultytimings}
          setfacultytimings={setfacultytimings}
        />
      )}
      {issubjectsallocated && (
        <Facultyrendering
          setfaculty={setfaculty}
          facultyarraytable={facultyarraytable}
          subjects={subjects}
          sections={sections}
          faculty={faculty}
          setfacultytimings={setfacultytimings}
          facultytimings={facultytimings}
          setdisplayingtimetable={setdisplayingtimetable}
          displayingtimetable={displayingtimetable}
          setfacultyarraytable={setfacultyarraytable}
          issubjectsallocated={issubjectsallocated}
          setisfacultyalloted={setisfacultyalloted}
          LowerTableData={LowerTableData}
          setLowerTableData={setLowerTableData}
          Branch={Branch}
          Year={Year}
        />
      )}
      {displayingtimetable && (
        <Algorithm
          subjects={subjects}
          setsubjects={setsubjects}
          sections={sections}
          faculty={faculty}
          facultytimings={facultytimings}
          sectiontimings={sectiontimings}
          setsectiontimings={setsectiontimings}
          setdisplayingtimetable={setdisplayingtimetable}
          displayingtimetable={displayingtimetable}
          CollegeTimings={CollegeTimings}
          setCollegeTimings={setCollegeTimings}
          Branch={Branch}
          Year={Year}
          CollegeSubjects={CollegeSubjects}
          setCollegeSubjects={setCollegeSubjects}
          setcount={setcount}
          setsections={setsections}
          setisfacultyalloted={setisfacultyalloted}
          setissectionalloted={setissectionalloted}
          setfacultyarraytable={setfacultyarraytable}
          settableofsubjects={settableofsubjects}
          setissubjectsallocated={setissubjectsallocated}
          setfaculty={setfaculty}
          setBranch={setBranch}
          setYear={setYear}
          setdata={setdata}
        />
      )}
    </form>
  );
}

export default App;
