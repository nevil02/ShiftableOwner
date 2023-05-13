import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Fonts} from '../../theme';
import {Icons} from '../../theme/icons';
import {moderateScale} from '../../theme/scalling';
const VerifiedStaf_profile_clinic_details = ({
  image,
  text,
  image_width,
  image_height,
  style,
}) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        marginVertical: moderateScale(7),
        flexDirection: 'row',
      }}>
      <Image
        source={image}
        style={{
          width:
            style === 'pin'
              ? moderateScale(11)
              : style === 'phone'
              ? moderateScale(13)
              : style === 'email'
              ? moderateScale(11)
              : style === 'web'
              ? moderateScale(14)
              : moderateScale(14),
          height:
            style === 'pin'
              ? moderateScale(14)
              : style === 'phone'
              ? moderateScale(13)
              : style === 'email'
              ? moderateScale(14)
              : style === 'web'
              ? moderateScale(14)
              : moderateScale(15),
          marginTop: moderateScale(3),
        }}
      />
      <Text style={styles.field_title}>{text}</Text>
    </View>
  );
};

export default VerifiedStaf_profile_clinic_details;

const styles = StyleSheet.create({
  field_title: {
    color: Colors.black,
    fontSize: moderateScale(14),
    fontFamily: Fonts.satoshi_regular,
    marginLeft: moderateScale(10),
  },
});
