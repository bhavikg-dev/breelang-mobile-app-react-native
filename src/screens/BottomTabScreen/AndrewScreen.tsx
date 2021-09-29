import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,    
    Animated,
    Image,
    ImageBackground
  } from 'react-native';

import { moderateScale } from '@utils/utils';
import { Colors, Images } from '@res';
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
/* import { Slider } from '../../components/Slider'; */

const { width, height } = Dimensions.get('window');

interface IProps {
}

interface IState {
  images?: string[];
  width?: number | string;
  desc?: string[];
}

interface SliderProp{
  amount: string;
  title: string;
}

const Slider = ( { amount, title }: SliderProp ) => {
  return(
    <View style={styles.sliderSection} >
      <View style={{justifyContent: 'center', paddingVertical: moderateScale(18), marginTop: moderateScale(5), alignItems:'center'}}>
        <View style={{justifyContent: 'center', alignItems:'center', flexDirection: 'row',}}>
          <Image source={Images.unionIcon} style={[styles.iconImage, { marginRight: moderateScale(15) , transform: [{ scaleX: -1 } ]}]} />
          <Text style={styles.amountText}>{amount}</Text>
          <Image source={Images.unionIcon} style={[styles.iconImage, { marginLeft: moderateScale(15)}]} />
        </View>
        <View>
          <Text style={{fontSize: moderateScale(14), fontWeight: 'bold', color: Colors.white}}>{title}</Text>
        </View>
      </View>
    </View>
  );
}


class AndrewScreen extends React.Component<IProps, IState> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground source={Images.topBackgroundImage}  style={styles.image} >
            <View style={styles.titleContainer}>
                <Text style={styles.appTitle}><Text style={{color:'#d295ff'}}>my</Text> loona</Text>
            </View>
            </ImageBackground>
            <View style={styles.userTitleView}>
              <Text style={styles.userTitle}>Hi Andrew </Text>
              <View style={styles.plusView}>
                <Text style={styles.userSubTitle}>PLUS</Text>
              </View>
            </View>
            <View style={styles.upgradeSection}>
              <View style={styles.upgradeToView}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.upgradeToText}>UPGRADE TO </Text>
                  <View style={styles.upgradePlusView}>
                    <Text style={styles.upgradePlus}>PLUS</Text>
                  </View>
                </View>
                <Text style={{color:'white',fontSize: moderateScale(11) , marginTop: moderateScale(6)}}>Experience full loona effect each night! Unlock all exclusive content.</Text>
              </View>
              <View style={{justifyContent:'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.upgradeTouchable}>
                    <Text style={styles.upgradeBtn}>UPGRADE</Text>
                </TouchableOpacity>
              </View>
            </View>
           
            <View>
              <Animated.ScrollView horizontal snapToInterval={width} decelerationRate={'fast'} showsHorizontalScrollIndicator={false} bounces={false} >
                <Slider amount="40"  title="Longest streak" />
                <Slider amount="70"  title="Longest streak" />
                <Slider amount="55"  title="Longest streak" />
              </Animated.ScrollView>
            </View>
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.touchableTitle}>
              <Icon name='heart' style={styles.iconStyle} type="feather" size={22} color={ Colors.white } />

              <Text style={styles.menuTitle}>Favourite</Text>

              <Icon name='chevron-right' style={styles.leftArrow} type="feather" size={22} color={ Colors.white } />
              
            </TouchableOpacity>
            <TouchableOpacity  style={styles.touchableTitle}>
              <Icon name='pen-tool' style={styles.iconStyle} type="feather" size={22} color={ Colors.white } />
              <Text style={styles.menuTitle}>All scenes</Text>
              <Icon name='chevron-right' style={styles.leftArrow} type="feather" size={22} color={ Colors.white } />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.touchableTitle}>
              <Icon name='users' style={styles.iconStyle} type="feather" size={22} color={ Colors.white } />

              <Text style={styles.menuTitle}>Join loona family</Text>

              <Icon name='chevron-right' style={styles.leftArrow} type="feather" size={22} color={ Colors.white } />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.touchableTitle}>
              <Icon name='user-plus' style={styles.iconStyle} type="feather" size={22} color={ Colors.white } />

              <Text style={styles.menuTitle}>Invite your friend</Text>

              <Icon name='chevron-right' style={styles.leftArrow} type="feather" size={22} color={ Colors.white } />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.touchableTitle}>
              <Icon name='message-circle' style={styles.iconStyle} type="feather" size={22} color={ Colors.white } />

              <Text style={styles.menuTitle}>Contact us</Text>

              <Icon name='chevron-right' style={styles.leftArrow} type="feather" size={22} color={ Colors.white } />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.touchableTitle}>
              <Icon name='settings' style={styles.iconStyle} type="feather" size={22} color={ Colors.white } />

              <Text style={styles.menuTitle}>Settings</Text>

              <Icon name='chevron-right' style={styles.leftArrow} type="feather" size={22} color={ Colors.white } />
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>        
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  
    container: {
      backgroundColor: Colors.cod_gray_2,
      height: '100%',
      width: '100%',
      paddingHorizontal: moderateScale(15),
    },
    image: {
      flex: 1,
      
    },
    titleContainer:{
      paddingVertical: moderateScale(12),
    },
    appTitle: {
      fontSize: moderateScale(29),
      lineHeight: moderateScale(36),
      color: Colors.white,
      fontWeight: 'bold',
    },
    userTitleView:{
      paddingVertical: moderateScale(5),
      flexDirection: 'row',
    },
    userTitle: {
      fontSize: moderateScale(28),
      lineHeight: moderateScale(34),
      color: Colors.white,
      fontWeight: 'bold',
    },
    plusView:{
      backgroundColor:'#eee', 
      justifyContent: 'center', 
      paddingHorizontal: moderateScale(5), 
      borderRadius: moderateScale(5), 
      height: moderateScale(20), 
      marginTop: moderateScale(10) 
    },
    userSubTitle:{
      fontWeight: 'bold',
    },
    upgradeSection:{
      width: '100%',
      backgroundColor:'rgba(125, 44, 240, 0.3)', 
      paddingHorizontal:moderateScale(10), 
      paddingVertical: moderateScale(10), 
      borderRadius: moderateScale(10), 
      borderWidth: moderateScale(3), 
      marginTop: moderateScale(10),
      borderColor: '#7428df',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    upgradeToView:{
      width: '60%'
    },
    upgradeToText: {
      fontSize: moderateScale(22),
      letterSpacing:  moderateScale(1),
      fontFamily: 'Euclid Circular A',
      color: Colors.white,
      fontWeight: 'bold',
    },
    upgradePlusView: {
      backgroundColor:'#7428df', 
      justifyContent: 'center', 
      paddingHorizontal: moderateScale(5), 
      borderRadius: moderateScale(7), 
      height: moderateScale(20), 
      marginTop: moderateScale(6), 
    },
    upgradePlus:{
      color: Colors.white,
      fontWeight: 'bold',
    },
    upgradeTouchable:{
      backgroundColor:'#802DF6',
      paddingHorizontal: moderateScale(15), 
      paddingVertical: moderateScale(10), 
      borderRadius: moderateScale(20) 
    },
    upgradeBtn: {
      color: Colors.white, 
      fontSize:moderateScale(17), 
      fontWeight: 'bold',
      letterSpacing: moderateScale(0.5),
    },
    sliderSection:{
      width,
      paddingRight: moderateScale(15), 
    },
    amountText: {
      fontSize: moderateScale(56),
      lineHeight:moderateScale(67),
      letterSpacing:moderateScale(0.91),
      color: Colors.white,
      fontWeight: 'bold'
    },
    menuContainer: {
      paddingVertical: moderateScale(5),
    },
    touchableTitle:{
      flexDirection: 'row',
      paddingVertical: moderateScale(10),
    },
    iconStyle:{
      marginRight: moderateScale(10),
      marginTop: moderateScale(5),
    },
    leftArrow: {
      marginTop: moderateScale(5),
      fontSize: moderateScale(23),
      color: Colors.swiss_coffee, 
      flex: 1,
      textAlign: 'right',
    },
    menuTitle: {
      fontSize: moderateScale(16),
      fontWeight: '500',
      color: 'white',
      justifyContent: 'center'
    },
    iconImage: {
      height: moderateScale(80),
      width: moderateScale(40),
      resizeMode: 'contain',
    },
  });

  
export default AndrewScreen;