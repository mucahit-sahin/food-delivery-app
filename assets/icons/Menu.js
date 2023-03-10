import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Menu = (props) => (
  <Svg
    width={25}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.781 4.688h20.313c.431 0 .781-.35.781-.782V.781A.781.781 0 0 0 21.094 0H.78A.781.781 0 0 0 0 .781v3.125c0 .432.35.781.781.781ZM24.22 8.594H3.906a.781.781 0 0 0-.781.781V12.5c0 .432.35.781.781.781H24.22c.431 0 .781-.35.781-.781V9.375a.781.781 0 0 0-.781-.781Zm-3.125 8.594H.78a.781.781 0 0 0-.781.78v3.126c0 .431.35.781.781.781h20.313c.431 0 .781-.35.781-.781v-3.125a.781.781 0 0 0-.781-.782Z"
      fill="#525252"
    />
  </Svg>
);

export default Menu;
