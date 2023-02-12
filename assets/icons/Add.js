import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Add(props) {
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
        d="M12.11 0C5.42 0 0 5.42 0 12.11c0 6.689 5.42 12.109 12.11 12.109 6.689 0 12.109-5.42 12.109-12.11C24.219 5.42 18.799 0 12.109 0zm7.03 13.477a.588.588 0 01-.585.585h-4.492v4.493a.588.588 0 01-.586.586h-2.735a.588.588 0 01-.586-.586v-4.492H5.664a.588.588 0 01-.586-.586v-2.735c0-.322.264-.586.586-.586h4.492V5.664c0-.322.264-.586.586-.586h2.735c.322 0 .585.264.585.586v4.492h4.493c.322 0 .586.264.586.586v2.735z"
        fill="#F4E4CD"
      />
    </Svg>
  );
}

export default Add;
