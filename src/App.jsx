import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      {/* outlet */}
      <Outlet />
    </>
  );
}

export default App;
