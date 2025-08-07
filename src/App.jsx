import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div>


       <Routes>
          <Route path="/" element={<HomePage/>} />
       </Routes>
       <Footer/>
    </div>
    

        
       
    
    </>
  );
}

export default App;
