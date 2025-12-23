import { useTheme } from "../../context/ThemeContext";


export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="container">
               
                    <h1>Where in the world?</h1>
                
                
                  <button onClick={toggleTheme} className="theme-toggle">
                    <span style={{ fontWeight: 'bold' }}>
                      {isDark ? "SWITCH TO LIGHT" : "SWITCH TO DARK"}
                    </span>
                </button>
            </div>
        </nav>
    );
}