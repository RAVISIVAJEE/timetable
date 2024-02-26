import { useState } from "react";
import App from "./App";
import Header from "./Header";
function Branch({
  CollegeTimings,
  setCollegeTimings,
  facultytimings,
  setfacultytimings,
  CollegeSubjects,
  setCollegeSubjects,
  LowerTableData,
  setLowerTableData,
  selectedOption,
  setselectedOption,
}) {
  const Branchnames = ["CSE", "ECE", "EEE", "IT", "CIVIL", "MECH"];
  const Years = ["II", "III", "IV"];
  const [Branch, setBranch] = useState("");
  const [Year, setYear] = useState("");
  const [data, setdata] = useState(false);
  console.log("in Branch.jsx CollegeTimings are", CollegeTimings);
  console.log("in Branch.jsx setCollegeTimings are", setCollegeTimings);
  return (
    <>
      <Header />
      {!data && (
        <div>
          <label htmlFor="Branch">Select Branch:</label>
          <select
            name="Branch"
            id="Branch"
            value={Branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="">Select Branch</option>
            {Branchnames.map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="Year">Select Year:</label>
          <select
            name="Year"
            id="Year"
            value={Year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {Years.map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
          <br />
          <button type="button" onClick={() => setdata(!data)}>
            Set
          </button>
        </div>
      )}
      {data && (
        <App
          CollegeTimings={CollegeTimings}
          setCollegeTimings={setCollegeTimings}
          Branch={Branch}
          setBranch={setBranch}
          Year={Year}
          setYear={setYear}
          setdata={setdata}
          facultytimings={facultytimings}
          setfacultytimings={setfacultytimings}
          CollegeSubjects={CollegeSubjects}
          setCollegeSubjects={setCollegeSubjects}
          LowerTableData={LowerTableData}
          setLowerTableData={setLowerTableData}
          selectedOption={selectedOption}
          setselectedOption={setselectedOption}
        />
      )}
    </>
  );
}

export default Branch;
