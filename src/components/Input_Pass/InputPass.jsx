import React from "react";

const InputPass = ({ password, passRef, onPassMethod }) => {
  return (
    <>
      <input
        type="text"
        placeholder="password"
        value={password}
        ref={passRef}
        onChange={(e) => onPassMethod(e.target.value)}
        className="inputPass"
        readOnly
      />
    </>
  );
};

export default InputPass;
