import { NavLink } from "react-router-dom";
import logo from "./Assets/download.png"; // Import the image file
import "./Header.css"; // Import CSS file for styling

function Header({ selectedOption, setselectedOption }) {
  const timetableData = {
    BSH: {},
    Branch: {},
  };
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="Logo" className="logo" />{" "}
        {/* Use the imported image */}
        <ul className="nav-links">
          <li>
            <NavLink exact to="/HomePage" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timetable">Timetable</NavLink>
            <ul className="dropdown">
              {Object.keys(timetableData).map((branch) => (
                <li key={branch}>
                  <NavLink to={`/${branch}`} activeClassName="active">
                    <button onClick={(e) => setselectedOption({ branch })}>
                      {branch}
                    </button>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/selecttimetablepage" activeClassName="active">
              ShowTimeTable
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
