import React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path } from 'react-native-svg';
import { GLOBAL } from "../../style/globals";
import { TYPOGRAPHY } from "../../style/typography";
import { View } from "../../components/Themed";
import Title from "../../components/Title";

interface Props{
    style?:ViewStyle,
    color?:string
}

const defaults : Props ={
style: {width:24, height:24},
color:TYPOGRAPHY.COLOR.Primary
}




const Triangle = (props: Props) => {
  return (
    <View>
        <Title text="HELLO"/>
    <Svg
      style={props.style}  
      viewBox="0 0 20 20"
    >
      <Path 
      fill={props.color}
      d="M46.938 4411.948l6.062-8.144v11.696l-6.062-3.552zm14.125 0L55 4415.5v-11.696l6.063 8.144zm-6.062-11.494L54 4399l-1 1.454-9 12.091 9 5.273 1 .539 1.001-.539 8.999-5.273-8.999-12.091z"></Path>
    </Svg>
    </View>
  )
}
Triangle.defaultProps =defaults;
export default Triangle;
