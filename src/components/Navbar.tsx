import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav>
      <Link to="/" className={currentPath === "/" ? "active-link" : ""}>
        Home
      </Link>
      <Link to="/superheroes" className={currentPath === "/superheroes" ? "active-link" : ""}>
        Superheroes
      </Link>
    </nav>
  );
};
export default Navbar;
