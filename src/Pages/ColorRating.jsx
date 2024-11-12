import colorData from "../data/color_data.json";
import ColorList from "../components/ColorRatingCompo/ColorList";

import { useState } from "react";
const ColorRating = () => {
  const [colors, setColors] = useState(colorData);
  // console.log("colors data ==> ", colors);
  return (
    <>
      <ColorList
        colors={colors}
        onColorRemove={(id) => {
          const newColors = colors.filter((color) => color.id != id);
          setColors(newColors);
        }}
        onColorRate={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      />
    </>
  );
};

export default ColorRating;
