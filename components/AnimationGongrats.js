import React, { useLayoutEffect, useState } from "react";
import Confetti from "react-confetti";

/*---------------resize window-----------------*/
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
/*--------------------X------------------------*/

function AnimationGongrats() {
  const [width, height] = useWindowSize();
  return (
    <div>
      <Confetti
        recycle={false}
        numberOfPieces={2000}
        width={width}
        height={height}
      />
    </div>
  );
}

export default AnimationGongrats;
