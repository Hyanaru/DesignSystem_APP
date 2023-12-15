//Style
import { TYPOGRAPHY } from "../style/typography";
import { GlobalStyle } from "../style/globals";
//COMPONENTS
import { Text } from '../components/Themed';
//Interfaces
import ITextProps from "./Interfaces/ITextProps";
  

  
  const Subtitle: React.FC<ITextProps>= ({text,color=TYPOGRAPHY.COLOR.Secondary}) => {
 
    return (
    <Text style={[GlobalStyle.subtitle,{color}]}>
        {text}
  </Text>
    )
  };




  export default Subtitle;