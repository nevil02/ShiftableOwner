import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Fonts} from '../../theme';
import Colors from '../../theme/Colors';
import {Icons} from '../../theme/icons';
import {moderateScale} from '../../theme/scalling';

const SubScreenHeader = ({
  header_text,
  back_button,
  notification_button,
  notificationButton,
  sub_title,
}) => {
  return (
    <View style={styles.header_mainView}>
      <TouchableOpacity
        style={[styles.header_firstView, {flex: 1.2}]}
        onPress={back_button}>
        <Image source={Icons.arrow_back} style={styles.back_arrow_image} />
      </TouchableOpacity>
      <View style={[styles.header_firstView, {flex: 7.6}]}>
        <Text
          style={[
            styles.header_title_text,
            {
              fontSize: notificationButton
                ? moderateScale(16)
                : moderateScale(17),
            },
          ]}>
          {header_text}
        </Text>
        {sub_title !== undefined ? (
          <Text style={styles.sub_title_text}>{sub_title}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={[styles.header_firstView, {flex: 1.2}]}
        onPress={notification_button}>
        {notificationButton ? (
          <Image source={Icons.bell} style={styles.bell_arrow_image} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default SubScreenHeader;
const styles = StyleSheet.create({
  header_mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.blue[500],
    alignItems: 'center',
  },
  header_firstView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(20),
    paddingHorizontal: moderateScale(5),
  },
  header_title_text: {
    color: Colors.white,
    fontFamily: Fonts.satoshi_medium,
  },
  back_arrow_image: {
    width: moderateScale(18),
    height: moderateScale(16),
  },
  bell_arrow_image: {
    width: moderateScale(18),
    height: moderateScale(20),
  },
  sub_title_text: {
    color: Colors.white,
    fontFamily: Fonts.satoshi_regular,
    fontSize: moderateScale(12),
    marginTop: moderateScale(3),
  },
});
