import Color from "./Color";

const ColorList = ({ colors = [], onColorRemove, onColorRate }) => {
  return !colors.length ? (
    <div>No colors listed.</div>
  ) : (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onColorRemove}
          onRate={onColorRate}
        />
      ))}
    </div>
  );
};

export default ColorList;
