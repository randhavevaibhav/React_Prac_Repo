import React, { useState } from "react";
import Star from "./Star.jsx";
import "./RatingCompo.css";

const createArray = (length) => [...Array(length)];

const RatingCompo = ({ totalStars = 5, selectedStars = 0, onRate }) => {
  // const [selectedStars, setSelectedStars] = useState(0);

  // console.log(selectedStars);

  return (
    <div className="rating_container">
      <div className="stars_container">
        {createArray(totalStars).map((_, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i + 1)}
          />
        ))}
      </div>

      <p>
        Selcted {selectedStars} out of {totalStars} star
      </p>
    </div>
  );
};

export default RatingCompo;
