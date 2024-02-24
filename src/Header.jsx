import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>This is the Header</h1>
      <>
        <ul>
          <NavLink to="/HomePage">Home</NavLink>
        </ul>
      </>
    </div>
  );
}

export default Header;
