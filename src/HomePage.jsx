import { Link, NavLink } from "react-router-dom";
import "./HomePage.css";
import Header from "./Header";
function HomePage({ setselectedOption, selectedOption, handleOptionChange }) {
  return (
    <div className="Homepage">
      <Header
        selectedOption={selectedOption}
        setselectedOption={setselectedOption}
      />
      {/* <p>Please select to enter data for which of the following</p>
      <div className="innerhomepage">
        <label classname="label">
          <input
            type="radio"
            value="Bsh"
            checked={selectedOption === "Bsh"}
            onChange={(e) => handleOptionChange(e)}
          />
          BSH
        </label>
        <br />
        <label className="label">
          <input
            type="radio"
            value="Branch"
            checked={selectedOption === "Branch"}
            onChange={(e) => handleOptionChange(e)}
          />
          BRANCH
        </label>
      </div>

      <Link to={`/${selectedOption}`}>
        <button type="button">Go</button>
      </Link>
      <br /> */}
      {/* <NavLink to="/selecttimetablepage">ShowTimeTable</NavLink> */}
    </div>
  );
}

export default HomePage;
