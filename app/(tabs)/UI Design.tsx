//React ELEMENTS
import { ScrollView} from 'react-native';
import React from 'react';
//Style
import { GLOBAL } from '../../style/globals';
//COMPONENTS
import Subtitle from '../../components/Subtitle';
import { View } from '../../components/Themed';
import PrimarySeparator from '../../components/Separator';
import Title from '../../components/Title';



export default function UIDesignScreen() {
  return (
    <View style={[GLOBAL.LAYOUT.container,GLOBAL.LAYOUT.pageContainer]}>
      <Title text={'UI Design'}></Title>
      <PrimarySeparator/>    
      <ScrollView>
        <Subtitle text={'  This is gonna be the UI design page'}/>
      <PrimarySeparator/>
      </ScrollView>
    </View>
  
  );
}


