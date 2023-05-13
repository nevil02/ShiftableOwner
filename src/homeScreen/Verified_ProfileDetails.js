import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AuthHeader from '../Component/AuthComponent/AuthHeader';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {Icons} from '../theme/icons';
import {Images} from '../theme/images';
import {moderateScale, verticalScale} from '../theme/scalling';
import ProfileBottomView from '../Component/HomeComponent/ProfileBottomView';
import SimpleButton from '../Component/HomeComponent/SimpleButton';

import ImageCropPicker from 'react-native-image-crop-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import {SafeAreaView} from 'react-native-safe-area-context';
import PhoneInput from 'react-native-phone-number-input';
import ConformationModal from '../Component/HomeComponent/ConformationModal';

const Verified_ProfileDetails = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [openConfirmationModal, SetOpenConfirmationModal] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());
  const [checkValue, setCheckValue] = useState(false);
  const [number, setNumber] = useState('');

  const imageselect = () => {
    SetOpenConfirmationModal(true);
    // ImageCropPicker.openPicker({
    //   width: 300,
    //   height: 300,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    //   setImage(image.path);
    // });
  };

  const openGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        SetOpenConfirmationModal(false);
        setImage(image.path);
      })
      .catch(err => {
        SetOpenConfirmationModal(false);
      });
  };

  const openCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        SetOpenConfirmationModal(false);
        setImage(image.path);
      })
      .catch(err => {
        SetOpenConfirmationModal(false);
      });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setBirthDate(date);
    setDatePickerVisibility(false);
  };

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
          contentContainerStyle={{flexGrow: 1}}>
          {image !== null ? (
            <Image
              source={{
                uri: image,
              }}
              style={styles.profile_image}
            />
          ) : (
            <TouchableOpacity
              style={styles.profile_view}
              onPress={() => imageselect()}>
              <Image source={Icons.selectImage} />
            </TouchableOpacity>
          )}
          <Text style={styles.test_style}>Upload profile photo</Text>

          <Text style={[styles.field_title, {marginTop: moderateScale(20)}]}>
            Full Name
          </Text>
          <TextInput
            style={styles.textInpute_style}
            placeholder="Enter name here..."
            placeholderTextColor={Colors.gray[400]}
          />
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
                placeholderTextColor={Colors.gray}></TextInput>
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

          <Text style={[styles.field_title, {marginTop: moderateScale(20)}]}>
            Pincode
          </Text>
          <View style={styles.inputeFiled_view}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: moderateScale(10),
              }}>
              <Image
                source={Icons.pin}
                style={{width: moderateScale(12), height: moderateScale(15)}}
              />
            </View>
            <TextInput
              style={{
                color: Colors.black,
                flex: 1,
                alignSelf: 'flex-start',
                padding: Platform.OS == 'ios' ? 10 : 5,
              }}
              placeholder="10 KM"
              placeholderTextColor={Colors.gray[400]}
            />
          </View>
          <Text style={[styles.test_style, {alignSelf: 'flex-start'}]}>
            Ottawa,Canada
          </Text>

          <Text style={[styles.field_title, {marginTop: moderateScale(20)}]}>
            Gender
          </Text>
          <View style={styles.gender_select_view}>
            <TouchableOpacity
              style={styles.selectgender_button}
              onPress={() => setGender('Male')}>
              {gender !== null ? (
                gender === 'Male' ? (
                  <Image
                    source={Icons.check_green}
                    style={styles.check_image}
                  />
                ) : null
              ) : null}
            </TouchableOpacity>
            <Text
              style={[styles.test_style, styles.extra_style]}
              onPress={() => setGender('Male')}>
              Male
            </Text>
            <TouchableOpacity
              style={[
                styles.selectgender_button,
                {marginLeft: moderateScale(15)},
              ]}
              onPress={() => setGender('Female')}>
              {gender !== null ? (
                gender === 'Female' ? (
                  <Image
                    source={Icons.check_green}
                    style={styles.check_image}
                  />
                ) : null
              ) : null}
            </TouchableOpacity>
            <Text
              style={[styles.test_style, styles.extra_style]}
              onPress={() => setGender('Female')}>
              Female
            </Text>
            <TouchableOpacity
              style={[
                styles.selectgender_button,
                {marginLeft: moderateScale(15)},
              ]}
              onPress={() => setGender('Others')}>
              {gender !== null ? (
                gender === 'Others' ? (
                  <Image
                    source={Icons.check_green}
                    style={styles.check_image}
                  />
                ) : null
              ) : null}
            </TouchableOpacity>
            <Text
              style={[styles.test_style, styles.extra_style]}
              onPress={() => setGender('Others')}>
              Others
            </Text>
          </View>
          <Text style={[styles.field_title, {marginTop: moderateScale(20)}]}>
            Date of Birth
          </Text>
          <TouchableOpacity
            style={styles.textInpute_style}
            onPress={showDatePicker}>
            <Text style={{color: Colors.black}}>
              {Moment(birthDate).format('DD MMM, YYYY')}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={birthDate}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

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
            buttonPress={() => navigation.navigate('VerifiedDentalStaffTab')}
            backPosition={true}
          />
          <ConformationModal
            NoButton={() => openCamera()}
            YesButton={() => openGallery()}
            header={'Select from'}
            no_text="Camera"
            openConfirmationModal={openConfirmationModal}
            yes_text="Gallery"
            closeModal={() => SetOpenConfirmationModal(false)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Verified_ProfileDetails;

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
  profile_view: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(50),
    padding: moderateScale(30),
    borderWidth: 1,
    borderColor: Colors.sky_color,
    backgroundColor: Colors.blue[100],
    alignSelf: 'center',
    borderStyle: 'dashed',
  },
  test_style: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.satoshi_regular,
    color: Colors.black,
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  field_title: {
    color: Colors.black,
    fontSize: moderateScale(15),
    fontFamily: Fonts.satoshi_medium,
  },
  textInpute_style: {
    color: Colors.black,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: moderateScale(4),
    marginTop: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: Colors.white,
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
  extra_style: {
    marginTop: 0,
    marginLeft: moderateScale(5),
    fontSize: moderateScale(14),
  },
  selectgender_button: {
    height: moderateScale(20),
    width: moderateScale(20),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(50),
    borderWidth: 1,
    borderColor: Colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check_image: {
    width: moderateScale(19),
    height: moderateScale(19),
  },
  gender_select_view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  dropdown: {
    borderColor: Colors.borderColor,
    borderWidth: 1,
    // marginHorizontal: moderateScale(10),
    marginTop: moderateScale(5),
    borderRadius: moderateScale(4),
    padding: moderateScale(12),
    backgroundColor: Colors.white,
  },
  selectedItem: {
    color: Colors.black,
    fontSize: 12,
  },
  country_dropdown: {
    backgroundColor: Colors.gray[200],
    // paddingVertical: moderateScale(7),
    flex: 1,
    paddingHorizontal: moderateScale(2),
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
