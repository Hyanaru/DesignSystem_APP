//React ELEMENTS
import { ScrollView } from 'react-native';
import React from 'react';
//Style
import { GLOBAL } from '../../style/globals';
//COMPONENTS

import {  View } from '../../components/Themed';
import PrimarySeparator from '../../components/Separator';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { MonoText } from '../../components/Custom';
import Triangle from '../../assets/svg/triangle';
import { TYPOGRAPHY } from '../../style/typography';
import { Text } from '../../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={[GLOBAL.LAYOUT.container,GLOBAL.LAYOUT.pageContainer]}>
      <Title text={'Sandbox'} color={TYPOGRAPHY.COLOR.Black}></Title>
      <Text lightColor={TYPOGRAPHY.COLOR.Black} darkColor={TYPOGRAPHY.COLOR.Black}>
     Hello
  </Text>
      <MonoText>Styled</MonoText>
      <PrimarySeparator/>
      <ScrollView>
      
      <Subtitle text={'Sandbox page'}/>
      <Triangle/>
      </ScrollView>
    </View>
  );
}



