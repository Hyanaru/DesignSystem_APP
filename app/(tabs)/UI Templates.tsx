//React ELEMENTS
import { ScrollView } from 'react-native';
import React from 'react';
//Style
import { GlobalStyle } from '../../style/globals';
//COMPONENTS
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import {View } from '../../components/Themed';

export default function UITemplateScreen() {
  return (
    <View style={GlobalStyle.container}>
      <Title text={'UI Template'} />
      <ScrollView>
      <Subtitle text={'Template page'}/>
      </ScrollView>
    </View>
  
  );
}


