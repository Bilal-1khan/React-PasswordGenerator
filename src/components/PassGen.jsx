import React, { useEffect, useState, useCallback, useRef } from "react";
import { Container, InputCheck, InputRange, InputPass } from "./index";

const PassGen = () => {
  const [passLength, setPassLength] = useState(5);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [password, setPassword] = useState("");
  const [passStrength, setPassStrength] = useState();
  let passRef = useRef(null);

  const cssStyle = {
    borderBottom: "5px solid transparent",
    width: "0%",
    transition: ".5s ease",
  };
  const cssStyle1 = {
    borderBottom: "5px solid red",
    width: "25%",
    transition: ".5s ease",
  };
  const cssStyle2 = {
    borderBottom: "5px solid yellow",
    width: "50%",
    transition: ".5s ease",
  };
  const cssStyle3 = {
    borderBottom: "5px solid green",
    width: "100%",
    transition: ".5s ease",
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) string += "0123456789";
    if (characters) string += "!@#$%^&*()";
    if (uppercase) string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) string += "abcdefghijklmnopqrstuvwxyz";

    for (let i = 1; i <= passLength; i++) {
      const char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [passLength, number, characters, uppercase, lowercase, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passLength, number, characters, uppercase, lowercase, passwordGenerator]);

  function handleRange(event) {
    const target = event.target.value;
    setPassLength(target);

    if (target <= 5) {
      setPassStrength(cssStyle);
    }
    if (target == 10) {
      setPassStrength(cssStyle1);
    }
    if (target == 15) {
      setPassStrength(cssStyle2);
    }
    if (target == 30) {
      setPassStrength(cssStyle3);
    }
  }
  function handleNumber() {
    setNumber((prev) => !prev);
  }
  function handleCharacter() {
    setCharacters((prev) => !prev);
  }
  function handleUpperCase() {
    setUppercase((prev) => !prev);
  }
  function handleLowerCase() {
    setLowercase((prev) => !prev);
  }
  const handleClick = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Text copied");
  };

  return (
    <Container>
      <div className="passwordBox">
        <div className="passBoxTop ">
          <InputPass
            password={password}
            passRef={passRef}
            onPassMethod={setPassword}
          />
          <button onClick={handleClick} className="btn">
            copy
          </button>
        </div>
        <div className="passBoxBottom">
          <InputRange
            Label={"length"}
            range={passLength}
            onRange={handleRange}
          />
          <InputCheck
            Label={"number"}
            Id={"number"}
            isChecked={number}
            checkInput={handleNumber}
          />
          <InputCheck
            Label={"characters"}
            Id={"characters"}
            isChecked={characters}
            checkInput={handleCharacter}
          />
          <InputCheck
            Label={"uppercase"}
            Id={"uppercase"}
            isChecked={uppercase}
            checkInput={handleUpperCase}
          />
          <InputCheck
            Label={"lowercase"}
            Id={"lowercase"}
            isChecked={lowercase}
            checkInput={handleLowerCase}
          />
        </div>
        <div className="rounded-xl" style={passStrength}></div>
      </div>
    </Container>
  );
};

export default PassGen;
