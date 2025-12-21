import React from 'react'
import './featured.css'

const featured = () => {
  return (
    <div>
       <div className="featured">
        <div className="featuredItem">
            <img src= "" alt="ford focus" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Ford Focus MK3</h1>
                <p>Price at 7,500Eur</p>
                <p>2017 model</p>
                <p>200,000 km</p>
                <p>Engime : 1,6TDCI 95HP</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default featured
