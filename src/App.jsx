/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import { ColorFullMessage } from "./components/ColorFullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickFace = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  const onClickButtonUp = () => {
    setNum(num + 1);
  };
  const onClickButtonDown = () => {
    setNum(num - 1);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1>React</h1>
      <ColorFullMessage color="blue" message="how you doing" />
      <ColorFullMessage color="pink" message="good" />
      <button onClick={onClickButtonUp}>CountUp</button>
      <button onClick={onClickButtonDown}>CountDown</button>
      <br />
      <button onClick={onClickFace}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};

export default App;
