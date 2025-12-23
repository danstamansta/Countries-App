import './App.css'
import Navbar from "./components/NavBar/NavBar";
import {Outlet} from 'react-router-dom';

function App() {
 

  return (
    <>
      <Navbar />

      {/* outlet */}
      <Outlet/>    
     
    </>
  )
}

export default App
