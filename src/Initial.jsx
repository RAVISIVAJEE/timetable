import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Bsh from "./Bsh";
import Branch from "./Branch";
import HomePage from "./HomePage";
import SelectTimeTablePage from "./SelectTimeTablePage";
import BranchTimeTable from "./BranchTimeTable";
function Initial() {
  const [selectedOption, setselectedOption] = useState("");
  const [CollegeTimings, setCollegeTimings] = useState({
    BSH: {},
    CSE: { II: {}, III: {}, IV: {} },
    ECE: { II: {}, III: {}, IV: {} },
    IT: { II: {}, III: {}, IV: {} },
    EEE: { II: {}, III: {}, IV: {} },
    MECH: { II: {}, III: {}, IV: {} },
    CIVIL: { II: {}, III: {}, IV: {} },
  });
  const [CollegeSubjects, setCollegeSubjects] = useState({
    BSH: {},
    CSE: { II: {}, III: {}, IV: {} },
    ECE: { II: {}, III: {}, IV: {} },
    IT: { II: {}, III: {}, IV: {} },
    EEE: { II: {}, III: {}, IV: {} },
    MECH: { II: {}, III: {}, IV: {} },
    CIVIL: { II: {}, III: {}, IV: {} },
  });
  const [facultytimings, setfacultytimings] = useState({});
  //const [isbuttonClicked, setisbuttonClicked] = useState(false);

  // useEffect(
  //   function () {
  //     console.log("College timings are in USeEffect", CollegeTimings);
  //   },
  //   [CollegeTimings]
  // );

  function handleOptionChange(e) {
    setselectedOption(e.target.value);
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/timetable"
              element={<Navigate to="/HomePage" />} // Redirect to HomePage
            />
            <Route
              path="selecttimetablepage"
              element={
                <SelectTimeTablePage
                  CollegeTimings={CollegeTimings}
                  setCollegeTimings={setCollegeTimings}
                />
              }
            />
            <Route
              path="branchtimetable"
              element={
                <BranchTimeTable
                  CollegeTimings={CollegeTimings}
                  setCollegeTimings={setCollegeTimings}
                />
              }
            />
            <Route
              path="HomePage"
              element={
                <HomePage
                  selectedOption={selectedOption}
                  handleOptionChange={handleOptionChange}
                />
              }
            />
            <Route
              path="Bsh"
              element={
                <Bsh
                  CollegeTimings={CollegeTimings}
                  setCollegeTimings={setCollegeTimings}
                  CollegeSubjects={CollegeSubjects}
                  setCollegeSubjects={setCollegeSubjects}
                />
              }
            />
            <Route
              path="Branch"
              element={
                <Branch
                  CollegeTimings={CollegeTimings}
                  setCollegeTimings={setCollegeTimings}
                  CollegeSubjects={CollegeSubjects}
                  setCollegeSubjects={setCollegeSubjects}
                  facultytimings={facultytimings}
                  setfacultytimings={setfacultytimings}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <p>Please select to enter data for which of the following</p>
      <div>
        <label>
          <input
            type="radio"
            value="Bsh"
            checked={selectedOption === "Bsh"}
            onChange={(e) => handleOptionChange(e)}
          />
          BSH
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="BRANCH"
            checked={selectedOption === "Branch"}
            onChange={(e) => handleOptionChange(e)}
          />
          BRANCH
        </label>
      </div>

      <Link to={`/${selectedOption}`}>
        <button type="button">Go</button>
      </Link> */}
    </>
  );
}

export default Initial;
