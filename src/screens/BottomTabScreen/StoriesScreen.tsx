import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { Colors } from '@res';


class StoriesScreen extends Component {
    render() {
        return (
          
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Stories</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: Colors.cod_gray_2, 
      flex:1,
      justifyContent: 'center'
  },
 
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
});

  
export default StoriesScreen;