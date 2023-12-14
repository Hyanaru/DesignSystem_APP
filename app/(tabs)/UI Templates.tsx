import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React from 'react';

export default function UITemplateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UI Template</Text>
    
      <ScrollView>
      <Text style={styles.subtitle}>
        This is gonna be the UI template page
      </Text>

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
 
});
