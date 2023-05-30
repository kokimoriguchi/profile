import * as React from "react";
import {
  useTrail,
  useChain,
  useSprings,
  animated,
  useSpringRef,
} from "@react-spring/web";

import styles from "./styles.module.css";

const COORDS = [
  [10, 30],
  [10, 40],
  [10, 50],
  [10, 60],
  [10, 70],
  [20, 60],
  [30, 50],
  [40, 60],
  [50, 30],
  [50, 40],
  [50, 50],
  [50, 60],
  [50, 70], //ここまででW
  [70, 30],
  [70, 40],
  [70, 50],
  [70, 60],
  [70, 70],
  [80, 30],
  [80, 50],
  [80, 70],
  [90, 30],
  [90, 50],
  [90, 70], //ここまででE
  [110, 30],
  [110, 40],
  [110, 50],
  [110, 60],
  [110, 70],
  [120, 70],
  [130, 70], //ここまででL
  [150, 30],
  [150, 40],
  [150, 50],
  [150, 60],
  [150, 70],
  [160, 30],
  [160, 70],
  [170, 30],
  [170, 70], //ここまででC
  [190, 30],
  [190, 40],
  [190, 50],
  [190, 60],
  [190, 70],
  [200, 30],
  [200, 70],
  [210, 30],
  [210, 40],
  [210, 50],
  [210, 60],
  [210, 70], //ここまででO
  [230, 30],
  [230, 40],
  [230, 50],
  [230, 60],
  [230, 70],
  [240, 40],
  [250, 50],
  [260, 40],
  [270, 30],
  [270, 40],
  [270, 50],
  [270, 60],
  [270, 70], //ここまででM
];

const STROKE_WIDTH = 0.5;

const OFFSET = STROKE_WIDTH / 2;

const MAX_WIDTH = 300 + OFFSET * 2;
const MAX_HEIGHT = 100 + OFFSET * 2;

export default function App() {
  const gridApi = useSpringRef();

  const gridSprings = useTrail(50, {
    ref: gridApi,
    from: {
      x2: 0,
      y2: 0,
    },
    to: {
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    },
  });

  const boxApi = useSpringRef();

  const [boxSprings] = useSprings(COORDS.length, (i) => ({
    ref: boxApi,
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    delay: i * 200,
    config: {
      mass: 2,
      tension: 220,
    },
  }));

  useChain([gridApi, boxApi], [0, 1], 1500);

  return (
    <div className={styles["background-container"]}>
      <div className={styles.container}>
        <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
          <g>
            {gridSprings.map(({ x2 }, index) => (
              <animated.line
                x1={0}
                y1={index * 10 + OFFSET}
                x2={x2}
                y2={index * 10 + OFFSET}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
            {gridSprings.map(({ y2 }, index) => (
              <animated.line
                x1={index * 10 + OFFSET}
                y1={0}
                x2={index * 10 + OFFSET}
                y2={y2}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
          </g>
          {boxSprings.map(({ scale }, index) => (
            <animated.rect
              key={index}
              width={10}
              height={10}
              fill="currentColor"
              style={{
                transformOrigin: `${5 + OFFSET * 2}px ${5 + OFFSET * 2}px`,
                transform: `translate(${COORDS[index][0] + OFFSET}px, ${
                  COORDS[index][1] + OFFSET
                }px)`,
                scale,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

// import React from "react";
// import { useTrail, animated } from "react-spring";

// const TopVideo = () => {
//   const [trails, api] = useTrail(
//     2,
//     () => ({
//       from: { opacity: 0 },
//       to: { opacity: 1 },
//     }),
//     []
//   );

//   return (
//     <div>
//       {trails.map((props) => (
//         <animated.div style={props}>Hello World</animated.div>
//       ))}
//     </div>
//   );
// };

// export default TopVideo;
