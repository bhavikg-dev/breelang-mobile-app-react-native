import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

import { Colors } from '@res';

interface IProps {
}

interface IState {
  images?: string[];
  width?: number | string;
}

class SleepScapesScreen extends React.Component<IProps, IState> {
    render() {
        return (
          <View style={styles.container}>
            <View>
                <Text style={styles.sectionTitle}>Sleepscapes</Text>
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

  
export default SleepScapesScreen;