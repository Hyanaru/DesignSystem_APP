//Style
import { GlobalStyle } from "../style/globals";
import { TYPOGRAPHY } from "../style/typography";
//COMPONENTS
import { Text } from '../components/Themed';
//Interfaces
import ITextProps from "./Interfaces/ITextProps";
 
  const Title: React.FC<ITextProps>= ({text,color=TYPOGRAPHY.COLOR.Secondary}) => {
 
    return (
    <Text style={[GlobalStyle.title,{color}]}>
        {text}
  </Text>
    )
  };




  export default Title;