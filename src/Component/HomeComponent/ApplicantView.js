import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {Fonts} from '../../theme';
import Colors from '../../theme/Colors';
import {Icons} from '../../theme/icons';
import {Images} from '../../theme/images';
import {moderateScale} from '../../theme/scalling';
import DropDownComp from './DropDown';

const ApplicantView = ({
  sortby,
  sortByData,
  setSortby,
  verifiedStaf_Data,
  approve_click,
  ratingView,
}) => {
  return (
    <>
      {ratingView ? (
        <View style={styles.sortBy_view}>
          <Text style={styles.sortBy_text}>Sort by: </Text>
          <TouchableOpacity style={styles.dropdown_view}>
            <Text style={styles.rating_text}>Rating :</Text>
            <DropDownComp
              selectedValue={sortby}
              placeholder={sortby !== null ? sortby : 'Select'}
              data={sortByData}
              labelField={'value'}
              valueField={'value'}
              dropdown={styles.country_dropdown}
              selected={setSortby}
              placeholderStyle={{color: Colors.black}}
              key={'value'}
            />
          </TouchableOpacity>
        </View>
      ) : null}

      <FlatList
        data={verifiedStaf_Data}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.flatlistmain_view,
                {
                  marginTop:
                    index === 0 ? moderateScale(30) : moderateScale(10),
                  marginBottom:
                    index === verifiedStaf_Data.length - 1
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
                    <Image
                      source={Icons.GenderIcon}
                      style={styles.gender_icon}
                    />
                    <Text style={styles.semiregular_text}>{item.gender}</Text>
                    <Image source={Icons.Dote} style={styles.dote_icon} />
                    <Image source={Icons.star} style={styles.gender_icon} />
                    <Text style={styles.semiregular_text}>{item.rating}</Text>
                  </View>
                  <Text
                    style={[
                      styles.semiregular_text,
                      {alignSelf: 'flex-start'},
                    ]}>
                    {item.experience}
                  </Text>
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
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: moderateScale(25),
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text style={styles.price_text}>
                    {item.price}
                    <Text
                      style={[
                        styles.semiregular_text,
                        {fontSize: moderateScale(18)},
                      ]}>
                      /hour
                    </Text>
                  </Text>
                </View>
                <View style={styles.second_column}>
                  <TouchableOpacity
                    style={styles.approves_button}
                    onPress={approve_click}>
                    <Text
                      style={[
                        styles.semiregular_text,
                        styles.extrastyle_for_approved,
                      ]}>
                      Approve
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </>
  );
};

export default ApplicantView;

const styles = StyleSheet.create({
  country_dropdown: {
    width: Dimensions.get('window').width / 2.9,
    paddingHorizontal: moderateScale(4),
  },
  sortBy_view: {
    marginVertical: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: moderateScale(20),
  },
  sortBy_text: {
    fontSize: moderateScale(14),
    color: Colors.black,
    fontFamily: Fonts.satoshi_medium,
  },
  dropdown_view: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: moderateScale(10),
    borderRadius: moderateScale(4),
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  rating_text: {
    fontSize: moderateScale(14),
    color: Colors.black,
    fontFamily: Fonts.satoshi_regular,
  },

  flatlistmain_view: {
    padding: moderateScale(20),
    backgroundColor: Colors.white,
    marginHorizontal: moderateScale(20),
  },
  firstcolumn_view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
    paddingVertical: moderateScale(6),
    alignItems: 'center',
    alignSelf: 'flex-start',
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
    borderWidth: 1,
    borderColor: Colors.sky_color,
  },
  second_column: {
    flex: 1,
    alignItems: 'flex-end',
  },
  extrastyle_for_approved: {
    fontFamily: Fonts.satoshi_bold,
    marginLeft: 0,
    color: Colors.sky_color,
  },

  // rbSheet
  rbsheet_mainView: {
    backgroundColor: Colors.white,
    padding: moderateScale(15),
  },
  rbSheet_header_text: {
    color: Colors.black,
    fontSize: moderateScale(20),
    fontFamily: Fonts.satoshi_bold,
  },
  description: {
    fontFamily: Fonts.satoshi_regular,
    fontSize: moderateScale(16),
    color: Colors.black,
    marginVertical: moderateScale(10),
    textAlign: 'justify',
  },
});
