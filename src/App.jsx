import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import Homepage from "./screen/Home";
 import Contactpage from "./screen/contact";
 import Teampage from "./screen/Team";
 import Aboutus from "./screen/About";
import Navbar from "./layout/navbar";

function App() {
  return (
    <Router>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </Router>
  );
}

export default App;