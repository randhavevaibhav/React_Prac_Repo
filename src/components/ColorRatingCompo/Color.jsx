import RatingCompo from "./RatingCompo";
import { FaTrash } from "react-icons/fa";
const Color = ({ id, title, color, rating, onRemove, onRate }) => {
  return (
    <section>
      <h1>{title}</h1>

      <div style={{ height: 50, backgroundColor: color }}></div>
      <RatingCompo
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
    </section>
  );
};

export default Color;
