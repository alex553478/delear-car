import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/navbar.jsx";
import Home from "./assets/components/home.jsx"
import Contulmeu from "./assets/components/Contulmeu.jsx";
import Finantare from "./assets/components/finantare.jsx";
import LeasingCalculator from "./assets/components/caculator.jsx"

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contulmeu" element={<Contulmeu />} />
          <Route path="/finantare" element={<Finantare />} />
          <Route path="/calculator" element={<LeasingCalculator />} />
          
        </Routes>
      </Router>
    </AuthProvider>
    
  );
};

export default App;
