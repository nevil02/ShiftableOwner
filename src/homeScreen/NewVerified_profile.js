import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import AuthHeader from '../Component/AuthComponent/AuthHeader';
import SimpleButton from '../Component/HomeComponent/SimpleButton';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {Icons} from '../theme/icons';
import {Images} from '../theme/images';
import {moderateScale, verticalScale} from '../theme/scalling';
// import {CountryList, CountryPicker} from 'react-native-country-codes-picker';
import DropDownComp from '../Component/HomeComponent/DropDown';
import {profession} from '../theme/ConstantArray';
import RangeSelect from '../Component/HomeComponent/RangeComponent';
import ProfileBottomView from '../Component/HomeComponent/ProfileBottomView';
import ProfilePincodeRadius from '../Component/HomeComponent/ProfilePincodeRadius';

import {SafeAreaView} from 'react-native-safe-area-context';
import PhoneInput from 'react-native-phone-number-input';

const NewVerified_profile = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState({});
  const [selectRange, setSelectRange] = useState(0);
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    dial_code: '',
    combineCountycode: 'CA +133',
  });
  const [checkValue, setCheckValue] = useState(false);
  const [number, setNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        profileTextEnable={true}
        smallText="Tell us more about yourself"
        bigText="Profile Details"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          style={{
            paddingHorizontal: moderateScale(20),
            marginTop: moderateScale(20),
            flex: 1,
          }}
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View style={styles.header_view}>
            <TouchableOpacity
              onPress={() => navigation.navigate('VerifiedStaf_EditProfile')}
              style={styles.editButton}>
              <Image source={Icons.edit} style={styles.edit_image} />
            </TouchableOpacity>
            <Image source={Images.extraImage} style={styles.profile_image} />
            <Text style={styles.user_name}>Aryan Abadeh</Text>
            <View style={styles.gender_view}>
              <Image source={Icons.GenderIcon} style={styles.gender_icon} />
              <Text style={styles.gender_text}>Male</Text>
            </View>
            <View style={styles.horizontal_line} />
            <View style={styles.details_view}>
              <Image
                source={Icons.pin}
                style={{width: moderateScale(10), height: moderateScale(12)}}
              />
              <Text style={styles.test_style}>K1A0B1</Text>
              <Image
                source={Icons.Phone}
                style={{
                  width: moderateScale(12),
                  height: moderateScale(12),
                  marginLeft: moderateScale(12),
                }}
              />
              <Text style={styles.test_style}>1 (647) 948-6676</Text>
              <Image
                source={Icons.Calender}
                style={{
                  width: moderateScale(10),
                  height: moderateScale(12),
                  marginLeft: moderateScale(12),
                }}
              />
              <Text style={styles.test_style}>9 Sept, 1998</Text>
            </View>
          </View>

          <Text style={[styles.field_title, {marginTop: moderateScale(20)}]}>
            Phone Number
          </Text>
          <View style={styles.phoneInput}>
            <PhoneInput
              disableArrowIcon={true}
              flagButtonStyle={styles.flagStyle}
            />
            <View style={styles.main}>
              <TextInput
                style={styles.TextInput}
                placeholder={'Enter phone number here...'}
                keyboardType="numeric"
                value={number}
                maxLength={10}
                onChangeText={number => {
                  setNumber(number);
                }}
                placeholderTextColor={Colors.gray[500]}></TextInput>
              {number.length === 0 ? null : (
                <TouchableOpacity
                  style={styles.removeText}
                  onPress={() => setNumber('')}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                    }}
                    source={Images.TIMES}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <ProfileBottomView
            title_text={'Is your clinic on Google?'}
            description={
              'If your clinic has a google listing, you can search for it below to automatically add it. You will be able to add the details manually later too.'
            }
          />
          <Text style={[styles.field_title, {marginTop: moderateScale(20)}]}>
            Search your Clinic (Powered by Google)
          </Text>
          <View style={styles.textInpute_view}>
            <Image source={Icons.search} style={styles.pin_icon} />
            <TextInput
              style={{
                color: Colors.black,
                flex: 1,
                paddingHorizontal: moderateScale(5),
                padding: moderateScale(10),
                marginTop: moderateScale(5),
              }}
              multiline
              placeholder="Enter here..."
              placeholderTextColor={Colors.gray[400]}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginTop: moderateScale(10),
            }}>
            <TouchableOpacity
              style={[styles.touchabaleopacity_check]}
              onPress={() => setCheckValue(!checkValue)}>
              {checkValue ? (
                <Image
                  source={Icons.check_green}
                  style={styles.checkbox_image}
                />
              ) : null}
            </TouchableOpacity>
            <Text
              style={[
                styles.field_title,
                {marginLeft: moderateScale(10), marginTop: moderateScale(3)},
              ]}>
              Abadeh Dentals
            </Text>
          </View>
          <Text style={styles.paragraph_text}>
            Unit 101 - 332 Sheppard Ave. E Toronto, Ontario, Canada M2N 3B4
          </Text>
          <View style={{alignItems: 'flex-start'}}>
            <SimpleButton
              imagePositio={true}
              image={Icons.plus}
              buttonname={'Add clinic manually'}
              buttonPress={() => navigation.navigate('VerifiedStaf_AddClinic')}
              manually_add="manually_add"
            />
          </View>
          <SimpleButton
            imagePositio={false}
            image={Icons.arrow_forward}
            buttonname={'Continue'}
            buttonPress={() => navigation.navigate('Verified_ProfileDetails')}
            backPosition={true}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewVerified_profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkWhite,
  },
  header_view: {
    backgroundColor: Colors.white,
    padding: moderateScale(20),
  },
  profile_image: {
    borderRadius: moderateScale(50),
    width: moderateScale(100),
    height: moderateScale(100),
    alignSelf: 'center',
  },
  gender_view: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  gender_icon: {
    width: moderateScale(15),
    height: moderateScale(15),
  },
  gender_text: {
    color: Colors.black,
    fontFamily: Fonts.satoshi_regular,
    fontSize: moderateScale(15),
    marginLeft: moderateScale(7),
  },
  horizontal_line: {
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 2,
    padding: moderateScale(10),
  },
  details_view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(10),
    justifyContent: 'center',
  },
  test_style: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.satoshi_regular,
    color: Colors.black,
    marginLeft: moderateScale(5),
  },
  field_title: {
    color: Colors.black,
    fontSize: moderateScale(15),
    fontFamily: Fonts.satoshi_medium,
  },
  inputeFiled_view: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    borderColor: Colors.borderColor,
    marginTop: moderateScale(5),
    paddingHorizontal: moderateScale(5),
    backgroundColor: Colors.white,
  },

  editButton: {
    borderRadius: moderateScale(50),
    alignSelf: 'flex-end',
    backgroundColor: Colors.gray[200],
    padding: moderateScale(10),
  },
  edit_image: {
    width: moderateScale(13),
    height: moderateScale(13),
  },
  user_name: {
    alignSelf: 'center',
    fontSize: moderateScale(18),
    fontFamily: Fonts.satoshi_bold,
    color: Colors.black,
    marginVertical: moderateScale(10),
  },
  country_dropdown: {
    backgroundColor: Colors.gray[200],
    // paddingVertical: moderateScale(7),
    flex: 1,
    paddingHorizontal: moderateScale(2),
  },
  textInpute_view: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(4),
    borderWidth: 1,
    padding: moderateScale(3),
    borderColor: Colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  pin_icon: {
    width: moderateScale(15),
    height: moderateScale(18),
    marginHorizontal: moderateScale(10),
  },

  touchabaleopacity_check: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(3),
  },
  checkbox_image: {width: moderateScale(18), height: moderateScale(18)},
  paragraph_text: {
    color: Colors.gray[500],
    fontFamily: Fonts.satoshi_regular,
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
    marginLeft: moderateScale(25),
  },
  phoneInput: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: moderateScale(4),
    borderColor: Colors.borderColor,
    borderWidth: 1,
    marginTop: verticalScale(5),
  },
  flagStyle: {
    backgroundColor: Colors.gray[200],
    flex: 0.7,
  },
  main: {
    flexDirection: 'row',
    // paddingBottom: moderateScale(3),
    marginLeft: moderateScale(8),
    flex: 2,
  },
  TextInput: {
    fontSize: moderateScale(14.5),
    color: Colors.black,
    flex: 1,
  },
  removeText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableText: {
    fontSize: moderateScale(14),
    color: Colors.black,
  },
});
