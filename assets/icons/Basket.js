import * as React from "react";
import { Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { useSelector } from "react-redux";

function SvgComponent(props) {
  const { cart } = useSelector((state) => state.cart);
  if (cart.length !== 0) {
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
        <View
          style={{
            backgroundColor: "red",
            width: 20,
            height: 20,
            borderRadius: 10,
            absolute: 0,
            left: 15,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            {cart.length}
          </Text>
        </View>
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
