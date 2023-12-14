import { StyleSheet,ScrollView } from 'react-native';
import { MonoText } from '../../components/StyledText';
import { Text, View } from '../../components/Themed';
import React from 'react';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sandbox</Text>
      <MonoText>Styled</MonoText>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
      <Text style={styles.subtitle}>
        This is gonna be the test page
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
