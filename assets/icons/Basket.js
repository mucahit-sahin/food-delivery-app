import * as React from "react";
import { Text } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

function SvgComponent(props) {
  if (props.basket) {
    return (
      <Svg
        width={36}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M22.875 13.313h-4.188V12.25a6.757 6.757 0 0 0-6.75-6.75 6.757 6.757 0 0 0-6.75 6.75v1.063H.5v13.78A4.406 4.406 0 0 0 4.906 31.5H18.97a4.406 4.406 0 0 0 4.406-4.406V13.312h-.5ZM9.312 12.25a2.629 2.629 0 0 1 2.626-2.625 2.629 2.629 0 0 1 2.624 2.625v1.063h-5.25V12.25Zm7.313 5.36a.672.672 0 1 1 0-1.344.672.672 0 0 1 0 1.343Zm-9.375 0a.672.672 0 1 1 0-1.344.672.672 0 0 1 0 1.343Z"
          fill="#fff"
          stroke="#000"
        />
        <Circle cx={26} cy={10} r={10} fill="#F81111">
          <Text>2</Text>
        </Circle>
        <Path
          d="M23.468 12.356a44.442 44.442 0 0 0 2.22-1.896c.456-.416.84-.852 1.152-1.308.312-.456.468-.9.468-1.332 0-.328-.076-.584-.228-.768-.152-.184-.38-.276-.684-.276a.855.855 0 0 0-.72.348c-.168.224-.252.544-.252.96h-1.98c.016-.68.16-1.248.432-1.704a2.59 2.59 0 0 1 1.092-1.008c.456-.216.96-.324 1.512-.324.952 0 1.668.244 2.148.732.488.488.732 1.124.732 1.908 0 .856-.292 1.652-.876 2.388-.584.728-1.328 1.44-2.232 2.136h3.24v1.668h-6.024v-1.524Z"
          fill="#fff"
        />
      </Svg>
    );
  }
  return (
    <Svg
      width={24}
      height={27}
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.875 8.313h-4.188V7.25A6.757 6.757 0 0011.938.5a6.757 6.757 0 00-6.75 6.75v1.063H.5v13.78A4.406 4.406 0 004.906 26.5H18.97a4.406 4.406 0 004.406-4.406V8.312h-.5zM9.312 7.25a2.629 2.629 0 012.626-2.625 2.629 2.629 0 012.624 2.625v1.063h-5.25V7.25zm7.313 5.36a.672.672 0 110-1.344.672.672 0 010 1.343zm-9.375 0a.672.672 0 110-1.344.672.672 0 010 1.343z"
        fill="#fff"
        stroke="#000"
      />
    </Svg>
  );
}

export default SvgComponent;
