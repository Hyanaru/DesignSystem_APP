//Style
  import { TYPOGRAPHY } from "../style/typography";
import { GLOBAL } from "../style/globals";
//COMPONENTS
import {  View } from '../components/Themed';

  const PrimarySeparator: React.FC= () => {
    return <View style={GLOBAL.ELEMENTS.SeparatorPrimary} lightColor={TYPOGRAPHY.COLOR.Black} darkColor={TYPOGRAPHY.COLOR.White}  />;
  };




  export default PrimarySeparator;