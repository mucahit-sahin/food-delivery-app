import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Remove(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <Path
        d="M12.11 0C5.42 0 0 5.42 0 12.11c0 6.689 5.42 12.109 12.11 12.109 6.689 0 12.109-5.42 12.109-12.11C24.219 5.42 18.799 0 12.109 0zM5.663 14.063a.588.588 0 01-.586-.586v-2.735c0-.322.264-.586.586-.586h12.89c.323 0 .587.264.587.586v2.735a.588.588 0 01-.586.585H5.665z"
        fill="#F4E4CD"
      />
    </Svg>
  );
}

export default Remove;
