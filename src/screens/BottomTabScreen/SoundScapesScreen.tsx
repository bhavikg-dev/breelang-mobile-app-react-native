import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

import { Colors } from '@res';

class SoundScapesScreen extends Component {
    render() {
        
        return (
          <View style={styles.container}>
            <View>
                <Text style={styles.sectionTitle}>Soundscapes</Text>
            </View>          
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

  
export default SoundScapesScreen;