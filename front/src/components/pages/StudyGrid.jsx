import React from "react";
import { useTrail, animated } from "react-spring";

const StudyGrid = () => {
  const [trails] = useTrail(
    2,
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  return (
    <div>
      {trails.map((props) => (
        <animated.div style={props}>Hello World</animated.div>
      ))}
    </div>
  );
};

export default StudyGrid;
