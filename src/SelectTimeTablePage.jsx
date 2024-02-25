import React from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";

function SelectTimeTablePage() {
  return (
    <div>
      <Header />
      <h2>Select Time Table</h2>
      <div className="link-container">
        <NavLink to="/bshtimetable" className="timetable-link">
          BSH Time Table
        </NavLink>
        <p>View the time table of BSH</p>
        <NavLink to="/branchtimetable" className="timetable-link">
          Branch Time Table
        </NavLink>
        <p>View the time table by branch</p>
      </div>
      <div className="link-container">
        <NavLink to="/facultytimetable" className="timetable-link">
          Faculty Time Table
        </NavLink>
        <p>View the time table by faculty</p>
      </div>
    </div>
  );
}

export default SelectTimeTablePage;
