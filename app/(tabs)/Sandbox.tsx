//React ELEMENTS
import { ScrollView } from 'react-native';
import React from 'react';
//Style
import { GlobalStyle } from '../../style/globals';
//COMPONENTS
import { MonoText } from '../../components/StyledText';
import {  View } from '../../components/Themed';
import PrimarySeparator from '../../components/Separator';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';


export default function TabOneScreen() {
  return (
    <View style={GlobalStyle.container}>
      <Title text={'Sandbox'}></Title>
      <MonoText>Styled</MonoText>
      <PrimarySeparator/>
      <ScrollView>
  <Subtitle text={'Sandbox page'}/>

      </ScrollView>
    </View>
  );
}



