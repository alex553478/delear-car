import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/navbar.jsx";
import Home from "./assets/components/Home.jsx";
import Contulmeu from "./assets/components/Contulmeu.jsx";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contulmeu" element={<Contulmeu />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
