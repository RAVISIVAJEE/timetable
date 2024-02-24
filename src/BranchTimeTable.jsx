import { useState } from "react";
import Header from "./Header";
import InfoTable from "./InfoTable";
function BranchTimeTable(props) {
  const { CollegeTimings, setCollegeTimings } = props;
  const names = ["CSE", "ECE", "EEE", "IT", "CIVIL", "MECH"];
  const Yearss = ["II", "III", "IV"];
  const [Branchh, setBranchh] = useState("");
  const [Yearr, setYearr] = useState("");
  const [todisplay, settodisplay] = useState(false);

  function handletodisplay(e) {
    e.preventDefault();
    settodisplay(!todisplay);
    console.log("handletodisplay is clicked");
  }
  function handleBranchChange(branch) {
    setBranchh(branch);
    // Reset to not display InfoTable when branch changes
    settodisplay(false);
  }

  function handleYearChange(year) {
    setYearr(year);
    // Reset to not display InfoTable when year changes
    settodisplay(false);
  }
  return (
    <>
      <Header />
      <div>
        <label htmlFor="branch">Select Branch:</label>
        <select
          name="branch"
          id="branch"
          value={Branchh}
          onChange={(e) => handleBranchChange(e.target.value)}
        >
          <option value="">Select Branch</option>
          {names.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="year">Select Year:</label>
        <select
          name="year"
          id="year"
          value={Yearr}
          onChange={(e) => handleYearChange(e.target.value)}
        >
          <option value="">Select Year</option>
          {Yearss.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
        <br />
        <button type="button" onClick={(e) => handletodisplay(e)}>
          Display
        </button>
      </div>
      {console.log("todisplay is", todisplay)}
      {console.log("Branchh and Yearr is", Branchh, Yearr)}
      {console.log("College TImings are", CollegeTimings["CollegeTimings"])}
      {/* {console.log(
        "CollegeTimings[Branchh][Yearr]",
        CollegeTimings[Branchh][Yearr]
      )} */}

      {todisplay &&
        Branchh &&
        Yearr &&
        CollegeTimings[Branchh] &&
        CollegeTimings[Branchh][Yearr] && (
          <InfoTable data={CollegeTimings[Branchh][Yearr]} />
        )}
    </>
  );
}

export default BranchTimeTable;
