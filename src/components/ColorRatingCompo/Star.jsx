import React from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";

const Star = ({ selected = false, onSelect }) => {
  return (
    <FaStar
      color={selected ? "red" : "grey"}
      className="rating_star"
      onClick={onSelect}
    />
  );
};

export default Star;
