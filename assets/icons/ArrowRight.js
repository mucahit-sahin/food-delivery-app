import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function ArrowRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Circle cx={10} cy={10} r={10} fill="#419F7D" />
      <Path
        d="M13.649 10.496l-5.108 5.108a.898.898 0 01-1.274 0l-.848-.848a.898.898 0 010-1.274l3.62-3.62L6.42 6.24a.898.898 0 010-1.274l.845-.856a.898.898 0 011.273 0l5.108 5.108a.899.899 0 01.004 1.277z"
        fill="#fff"
        fillOpacity={0.9}
      />
    </Svg>
  );
}

export default ArrowRight;
