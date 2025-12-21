import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <h1>Favorite Cars</h1>

      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Porsche"
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h2>Porsche</h2>
          <p>€72,000 • 2021 • 15.000 km</p>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
          alt="Viper"
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h2>Viper</h2>
          <p>€45,000 • 2020 • 32.000 km</p>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
          alt="Lotus"
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h2>Lotus</h2>
          <p>€60,000 • 2005 • 25.000 km</p>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg"
          alt="BMW M3"
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h2>BMW M3</h2>
          <p>€100,000 • 2020 • 25.000 km</p>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg"
          alt="Audi A5 Break"
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h2>Audi A5 Break S</h2>
          <p>€50,000 • 2015 • 70.000 km</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
