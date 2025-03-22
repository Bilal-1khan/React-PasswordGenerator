import React from "react";

const InputRange = ({ Label, range, onRange }) => {
  return (
    <>
      <input
        type="range"
        min={5}
        max={50}
        id="inputRange"
        className="mx-3"
        value={range}
        onChange={(event) => onRange(event)}
      />
      <label htmlFor="inputRange" className="labels">
        {Label} ({range})
      </label>
    </>
  );
};

export default InputRange;
