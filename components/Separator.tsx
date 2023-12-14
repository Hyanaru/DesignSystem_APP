import { StyleSheet } from "react-native";
import { TYPOGRAPHY } from "../style/typography";
import { SEPARATOR } from "../style/globals";
import {  View } from '../components/Themed';




 
  
  const PrimarySeparator: React.FC= () => {
 
    return <View style={SEPARATOR.Primary} lightColor={TYPOGRAPHY.COLOR.Black} darkColor={TYPOGRAPHY.COLOR.White}  />;
  };




  export default PrimarySeparator;