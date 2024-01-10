import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Forside</Link>
        </li>
        <li>
          <Link to="/about">Om os</Link>
        </li>
      </ul>
    </nav>
  );
};
