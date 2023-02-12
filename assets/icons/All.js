import * as React from "react";
import Svg, { Path } from "react-native-svg";

function All(props) {
  return (
    <Svg
      width={27}
      height={21}
      viewBox="0 0 27 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.808 2.802l-.43-.176-.207.415-1.046 2.091v-3.35A1.281 1.281 0 0015.844.5h-4.688a1.281 1.281 0 00-1.281 1.281v3.351L8.83 3.041l-.208-.415-.43.176c-3.594 1.476-6.13 5.007-6.13 9.136v3.624h22.875v-3.624c0-4.13-2.535-7.66-6.13-9.136zm6.41 13.323H1.782A1.281 1.281 0 00.5 17.406v1.563a1.281 1.281 0 001.281 1.281H25.22a1.281 1.281 0 001.281-1.281v-1.563a1.281 1.281 0 00-1.281-1.281z"
        fill="#fff"
        stroke="#525252"
      />
    </Svg>
  );
}

export default All;
