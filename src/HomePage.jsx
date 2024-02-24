import { Link, NavLink } from "react-router-dom";
function HomePage({ selectedOption, handleOptionChange }) {
  return (
    <div>
      <p>Please select to enter data for which of the following</p>
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
      <br />
      <NavLink to="/selecttimetablepage">ShowTimeTable</NavLink>
    </div>
  );
}

export default HomePage;
