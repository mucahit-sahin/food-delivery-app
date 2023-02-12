import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Italian(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.518 18.764c-.317-4.387-1.98-8.09-4.696-10.76C14.106 5.33 10.367 3.718 5.95 3.46l.565-2.148h0c.136-.517.636-.86 1.195-.807l13.808 18.259zm0 0l2.183-.605c.518-.144.855-.653.79-1.214C23.5 8.352 16.356 1.321 7.71.505l13.808 18.259zM.51 24.134L5.284 5.985C9.297 6.114 12.63 7.514 15 9.848c2.37 2.333 3.815 5.632 3.995 9.614L.87 24.488a.29.29 0 01-.282-.073l-.352.356.352-.356a.291.291 0 01-.077-.282h0zm4.593-3.669a2.062 2.062 0 102.292-3.429 2.062 2.062 0 00-2.292 3.429zm2.344-7.422a2.063 2.063 0 102.292-3.43 2.063 2.063 0 00-2.292 3.43zm5.078 5.078a2.063 2.063 0 102.292-3.43 2.063 2.063 0 00-2.292 3.43z"
        fill="#fff"
        stroke="#000"
      />
    </Svg>
  );
}

export default Italian;
