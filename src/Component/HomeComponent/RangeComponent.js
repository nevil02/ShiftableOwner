import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Slider from '@react-native-community/slider';
import Colors from '../../theme/Colors';
import {Images} from '../../theme/images';
import {Dimensions} from 'react-native/Libraries/Utilities/Dimensions';
import {horizontalScale, moderateScale} from '../../theme/scalling';

// import { Range, getTrackBackground } from "react-range";

const RangeSelect = props => {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // marginLeft: moderateScale(-20),
      }}>
      <Slider
        style={{width: horizontalScale(360), height: 60}}
        value={props.range}
        minimumValue={0}
        maximumValue={100}
        step={1}
        thumbTintColor={Colors.yellow[400]}
        // onValueChange={(value)=> console.log(value)}
        onSlidingComplete={props.selectRange}
        minimumTrackTintColor={Colors.yellow[200]}
        maximumTrackTintColor={Colors.yellow[100]}
      />
      {/* <Text style={{textAlign: 'center', fontSize: 20, color: Colors.black}}>
        {props.range}
      </Text> */}
    </View>
  );
};
export default RangeSelect;
