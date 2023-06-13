import { NavLink } from 'react-router-dom';

function isActive({ isActive }) {
  return isActive ? { color: 'red' } : {};
}

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>Math magicians</h1>
      <ul className="navigation">
        <li>
          <NavLink style={isActive} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={isActive} to="/calculate">
            Calculate
          </NavLink>
        </li>
        <li>
          <NavLink style={isActive} to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  );
}
