import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import VerifiedStaf_mainHeader from '../Component/HomeComponent/VerifiedStaf_mainHeader';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {verifiedStaf_joblist} from '../theme/ConstantArray';
import {Icons} from '../theme/icons';
import {Images} from '../theme/images';
import {moderateScale} from '../theme/scalling';

const VerifiedStaf_Favourite = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <VerifiedStaf_mainHeader
        header_text={'Favorites'}
        openNotification={() => navigation.navigate('Notification')}
        openProfile={() => navigation.navigate('VerifiedStaf_Profile')}
      />
      <FlatList
        data={verifiedStaf_joblist}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.flatlistmain_view,
                {
                  marginTop:
                    index === 0 ? moderateScale(30) : moderateScale(10),
                  marginBottom:
                    index === verifiedStaf_joblist.length - 1
                      ? moderateScale(20)
                      : 0,
                },
              ]}>
              <View style={styles.firstcolumn_view}>
                <View style={styles.profile_image_view}>
                  <Image
                    source={Images.profileImage}
                    style={styles.profile_image}
                  />
                </View>
                <View style={styles.content_view}>
                  <Text style={styles.job_name_text}>{item.name}</Text>
                  <View style={styles.gender_view}>
                    <Text
                      style={[
                        styles.semiregular_text,
                        {marginLeft: moderateScale(0)},
                      ]}>
                      RDH, Hygenisty | 3Yrs
                    </Text>
                    {/* <Image source={Icons.Dote} style={styles.dote_icon} /> */}
                  </View>
                  <View style={styles.gender_view}>
                    <Image source={Icons.star} style={styles.gender_icon} />
                    <Text style={[styles.semiregular_text]}>{item.rating}</Text>
                  </View>
                  <View
                    style={[
                      styles.gender_view,
                      {justifyContent: 'space-between'},
                    ]}>
                    <Text
                      style={[
                        styles.semiregular_text,
                        {
                          textDecorationLine: 'underline',
                          color: Colors.sky_color,
                        },
                      ]}>
                      +1(625-526-789)
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.7,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                  }}>
                  <Image
                    source={Icons.heart_light}
                    style={{
                      width: moderateScale(18),
                      height: moderateScale(16),
                    }}
                  />
                  {/* <Image
                    source={Icons.chevron_down}
                    style={{
                      tintColor: Colors.gray[900],
                      width: moderateScale(20),
                      height: moderateScale(20),
                      alignSelf: 'flex-end',
                    }}
                  /> */}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default VerifiedStaf_Favourite;

const styles = StyleSheet.create({
  flatlistmain_view: {
    padding: moderateScale(20),
    backgroundColor: Colors.white,
    marginHorizontal: moderateScale(20),
  },
  firstcolumn_view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: moderateScale(20),
  },
  profile_image_view: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile_image: {
    width: moderateScale(87),
    height: moderateScale(87),
  },
  content_view: {
    flex: 6.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: moderateScale(15),
  },
  job_name_text: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.satoshi_medium,
    color: Colors.black,
    alignSelf: 'flex-start',
  },
  gender_view: {
    flexDirection: 'row',
    paddingVertical: moderateScale(3),
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
    // flex: 1,
  },
  gender_icon: {
    width: moderateScale(13),
    height: moderateScale(14),
  },
  semiregular_text: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.satoshi_regular,
    color: Colors.gray[700],
    marginLeft: moderateScale(5),
  },
  dote_icon: {
    tintColor: Colors.gray[200],
    width: moderateScale(4),
    height: moderateScale(4),
    marginHorizontal: moderateScale(10),
  },
  price_text: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.satoshi_bold,
    color: Colors.black,
  },
  approves_button: {
    alignItems: 'center',
    paddingVertical: moderateScale(7),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(4),
    // borderWidth: 1,
    // borderColor: Colors.sky_color,
  },
  second_column: {
    flex: 1,
    alignItems: 'flex-end',
  },
  extrastyle_for_approved: {
    fontFamily: Fonts.satoshi_bold,
    marginLeft: 0,
  },

  // time mesure

  flatlist_header_view: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: moderateScale(13),
    borderBottomColor: Colors.gray[200],
  },
  time_text: {
    color: Colors.black,
    fontFamily: Fonts.satoshi_bold,
    fontSize: moderateScale(16),
  },
  time_messure: {
    color: Colors.black,
    fontFamily: Fonts.satoshi_regular,
  },

  clock_image: {
    width: moderateScale(15),
    height: moderateScale(15),
    marginTop: moderateScale(2),
  },
  waiting_text: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.satoshi_regular,
    color: Colors.gray[400],
    marginLeft: moderateScale(5),
  },
});
