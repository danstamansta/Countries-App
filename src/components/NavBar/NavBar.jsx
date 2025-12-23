import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-title">Where in the world?</h1>

        <button onClick={toggleTheme} className="theme-toggle">
          <span style={{ fontWeight: "bold" }}>
            {isDark ? "SWITCH TO LIGHT MODE" : "SWITCH TO DARK MODE"}
          </span>
        </button>
      </div>
    </nav>
  );
}