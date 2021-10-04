import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { StyleSheet, Text, View} from 'react-native';
import Regform from './app/components/Regform'


export default class App extends React.Component{
  render(){
    return (
      <View styles={styles.container}>
        <Regform/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2833'
  },
});
