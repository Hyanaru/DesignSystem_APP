//Style
import { TYPOGRAPHY } from "../style/typography";
import { GLOBAL } from "../style/globals";
//COMPONENTS
import { Text } from '../components/Themed';
//Interfaces
import ITextProps from "./Interfaces/ITextProps";
  

  
  const Subtitle: React.FC<ITextProps>= ({text,color=TYPOGRAPHY.COLOR.Secondary}) => {
 
    return (
    <Text style={[GLOBAL.FONTS.subTitle,{color}]}>
        {text}
  </Text>
    )
  };




  export default Subtitle;