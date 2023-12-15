//Style
  import { TYPOGRAPHY } from "../style/typography";
import { GlobalStyle } from "../style/globals";
//COMPONENTS
import {  View } from '../components/Themed';

  const PrimarySeparator: React.FC= () => {
 
    return <View style={GlobalStyle.SeparatorPrimary} lightColor={TYPOGRAPHY.COLOR.Black} darkColor={TYPOGRAPHY.COLOR.White}  />;
  };




  export default PrimarySeparator;