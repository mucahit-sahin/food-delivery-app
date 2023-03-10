import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Thai(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={27}
      height={21}
      viewBox="0 0 27 21"
      color={"black"}
      {...props}
    >
      <Path fill="none" d="M0 0H20V20H0z" />
      <Path d="M17.2 4.5c-.4-.7-1-1.2-1.6-1.6C13 1.3 9.7 2 8.1 4.5c-.5.8-.8 1.8-.8 2.7 0 1.5-.6 3-1.6 4.1l-.8.8c-.5.5-1.9.2-2.5 1.2-1.1 1.9.7 2.6 1.2 3.1s1.2 2.4 3.1 1.2c.9-.6.6-1.9 1.2-2.5l.8-.8c1.1-1 2.6-1.6 4.1-1.6.3 0 .6 0 .8-.1-.8-1.6-.2-3.5 1.3-4.3.9-.5 2.1-.5 3 0 .3-1.3 0-2.7-.7-3.8z" />
    </Svg>
  );
}

export default Thai;
