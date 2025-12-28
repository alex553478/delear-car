import React from "react";
import Banner from "./banner.jsx";
import Featured from "./featured.jsx";
import Twobanner from "./twobanner.jsx"
import Footer from "./footer.jsx"


const Home = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Delear auto</h1>
      <Banner />
      <Featured />
      <Twobanner />
      <Footer />
      
    </div>
  );
};

export default Home;


