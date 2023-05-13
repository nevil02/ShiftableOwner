import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {Fonts} from '../../theme';
import Colors from '../../theme/Colors';
import {Icons} from '../../theme/icons';
import {Images} from '../../theme/images';
import {moderateScale, verticalScale} from '../../theme/scalling';

const VerifiedStaf_mainHeader = ({
  header_text,
  openProfile,
  openNotification,
}) => {
  return (
    <View style={[styles.container,{paddingTop: Platform.OS == "ios" ? verticalScale(50) :moderateScale(30),}]}>
      <Text
        style={{
          color: Colors.white,
          fontSize: moderateScale(20),
          fontFamily: Fonts.satoshi_bold,
        }}>
        {header_text}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={openNotification}>
          <Image
            source={Icons.bell}
            style={{
              width: moderateScale(18),
              height: moderateScale(20),
              marginHorizontal: moderateScale(20),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openProfile}>
          <Image
            source={Images.profileImage}
            style={{width: moderateScale(42), height: moderateScale(42)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifiedStaf_mainHeader;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.blue[500],
    
    paddingBottom: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    justifyContent: 'space-between',
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
  },
  secondary_container: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: Fonts.satoshi_bold,
    fontSize: moderateScale(22),
    color: Colors.white,
  },
});
