import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fonts} from '../../theme';
import Colors from '../../theme/Colors';
import {moderateScale} from '../../theme/scalling';

const ProfileBottomView = ({description, title_text}) => {
  return (
    <View>
      <Text style={styles.how_for_can_you_travel}>{title_text}</Text>
      <Text style={styles.paragraph_text}>{description}</Text>
    </View>
  );
};

export default ProfileBottomView;

const styles = StyleSheet.create({
  how_for_can_you_travel: {
    color: Colors.black,
    fontSize: moderateScale(22),
    fontFamily: Fonts.satoshi_medium,
    marginTop: moderateScale(17),
  },
  paragraph_text: {
    color: Colors.gray[500],
    fontFamily: Fonts.satoshi_regular,
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
  },
});
