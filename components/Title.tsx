//Style
import { GLOBAL } from "../style/globals";
import { TYPOGRAPHY } from "../style/typography";
//COMPONENTS
import { Text } from '../components/Themed';
//Interfaces
import ITextProps from "./Interfaces/ITextProps";
 
  const Title: React.FC<ITextProps>= ({text,color=TYPOGRAPHY.COLOR.Black}) => {
 
    return (
    <Text style={[GLOBAL.FONTS.h1,{color}]}>
        {text}
  </Text>
    )
  };




  export default Title;