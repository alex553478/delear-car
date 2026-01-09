import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/navbar.jsx";
import Home from "./assets/components/home.jsx"
import Contulmeu from "./assets/components/Contulmeu.jsx";
import Finantare from "./assets/components/finantare.jsx";
import LeasingCalculator from "./assets/components/caculator.jsx"
import Contact from "./assets/components/contact.jsx";
import  Masini from "./assets/components/masinidevanzare.jsx";
import Oferte from "./assets/components/oferte.jsx"
import DespreNoi  from "./assets/components/desprenoi.jsx";
import PDC from "./assets/components/pdc.jsx";
import Termeni from "./assets/components/tc.jsx";
import Qanda from "./assets/components/qanda.jsx";
import Cariere from "./assets/components/cariere.jsx";

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="masini" element={<Masini />} />
          <Route path="/contulmeu" element={<Contulmeu />} />
          <Route path="/finantare" element={<Finantare />} />
          <Route path="/calculator" element={<LeasingCalculator />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/oferte" element={<Oferte />} />
          <Route path="/desprenoi" element={<DespreNoi />} />
          <Route path="/pdc" element={<PDC />} />
          <Route path="/tc" element={<Termeni />} />
          <Route path="/qanda" element={<Qanda />} />
          <Route path="/cariere" element={<Cariere />} /> 
          
          
          
        </Routes>
      </Router>
    </AuthProvider>
    
  );
};

export default App;
