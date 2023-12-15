import { StyleSheet } from "react-native"




const GlobalStyle = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    subtitle:{
      fontSize: 14,
      fontWeight: 'bold',
      alignContent: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    SeparatorPrimary: { marginVertical: 30,
    height: 1,
    width: '80%'}
  });

  
export {GlobalStyle};