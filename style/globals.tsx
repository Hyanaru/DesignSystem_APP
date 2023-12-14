import { StyleSheet } from "react-native"


const SEPARATOR = StyleSheet.create({
    Primary:
    { marginVertical: 30,
    height: 1,
    width: '80%'}

});



const styles = StyleSheet.create({
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
  });

  
export {SEPARATOR};