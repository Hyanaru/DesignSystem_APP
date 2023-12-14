import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React from 'react';
import PrimarySeparator from '../../components/Separator';

export default function UIDesignScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UI Design</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    
      <ScrollView>
      <Text style={styles.subtitle}>
        This is gonna be the UI design page
      </Text>
      <PrimarySeparator/>
      </ScrollView>
    </View>
  
  );
}

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
