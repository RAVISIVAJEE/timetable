import Header from "./Header";
import { NavLink } from "react-router-dom";
function SelectTimeTablePage() {
  return (
    <div>
      <Header />
      <NavLink to="/branchtimetable">BranchTimeTable</NavLink>
      <br />
      <NavLink to="/facultytimetable">FacultyTimeTable</NavLink>
    </div>
  );
}

export default SelectTimeTablePage;
