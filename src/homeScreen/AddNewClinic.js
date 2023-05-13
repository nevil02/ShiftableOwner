import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBase,
  FlatList,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import CustomeDropdown from '../Component/HomeComponent/CustomeDropdown';
import SubScreenHeader from '../Component/HomeComponent/SubScreenHeader';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {clicData, profession} from '../theme/ConstantArray';
import {Icons} from '../theme/icons';
import {moderateScale, verticalScale} from '../theme/scalling';
import DropDownComp from '../Component/HomeComponent/DropDown';

import YesNoButton from '../Component/HomeComponent/YesNoButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import PhoneInput from 'react-native-phone-number-input';

const AddNewClinic = ({navigation}) => {
  const [selectedProfession, setSelectedProfession] = useState({
    name: '',
    _id: '',
  });
  const [selectavg, setSelectavg] = useState({
    name: '',
    _id: '',
  });
  const [software, setSoftware] = useState({
    name: '',
    _id: '',
  });
  const [radiography, setRadiography] = useState({
    name: '',
    _id: '',
  });
  const [ultrasonic, setUltrasonic] = useState({
    name: '',
    _id: '',
  });
  const [charting, setCharting] = useState({
    name: '',
    _id: '',
  });
  const [lunchTime, setLunchTime] = useState({
    name: '',
    _id: '',
  });
  const [parkingAvailibility, setParkingAvailibility] = useState({
    name: '',
    _id: '',
  });

  const [province, setProvince] = useState({
    name: '',
    _id: '',
  });
  const [country, setCountry] = useState({
    name: '',
    _id: '',
  });
  const [checkValue, setCheckValue] = useState(null);
  const [number, setNumber] = useState('');

  const [avgModal, setAvgModal] = useState(false);
  const [softwareModal, setSoftwareModal] = useState(false);
  const [radiographyModal, setRadiographyModal] = useState(false);
  const [ultrasonicModal, setUltrasonicModal] = useState(false);
  const [chartingModal, setChartingModal] = useState(false);
  const [lunchTimeModal, setLunchTimeModal] = useState(false);
  const [parkingAvailibilityModal, setParkingAvailibilityModal] =
    useState(false);
  const [provinceModal, setProvinceModal] = useState(false);
  const [countryModal, setCountryModal] = useState(false);

  const selectAvg = item => {
    setSelectavg({
      name: item.name,
      _id: item._id,
    });
    setAvgModal(!avgModal);
  };
  const selectSoftware = item => {
    setSoftware({
      name: item.name,
      _id: item._id,
    });
    setSoftwareModal(!softwareModal);
  };
  const selectRadiography = item => {
    setRadiography({
      name: item.name,
      _id: item._id,
    });
    setRadiographyModal(!radiographyModal);
  };
  const selectUltrasonic = item => {
    setUltrasonic({
      name: item.name,
      _id: item._id,
    });
    setUltrasonicModal(!ultrasonicModal);
  };
  const selectCharting = item => {
    setCharting({
      name: item.name,
      _id: item._id,
    });
    setChartingModal(!chartingModal);
  };
  const selectLunchTime = item => {
    setLunchTime({
      name: item.name,
      _id: item._id,
    });
    setLunchTimeModal(!lunchTimeModal);
  };
  const selectParkingAvailibility = item => {
    setParkingAvailibility({
      name: item.name,
      _id: item._id,
    });
    setParkingAvailibilityModal(!parkingAvailibilityModal);
  };

  const selectProvince = item => {
    setProvince({
      name: item.name,
      _id: item._id,
    });
    setProvinceModal(!provinceModal);
  };
  const selectCountry = item => {
    setCountry({
      name: item.name,
      _id: item._id,
    });
    setCountryModal(!countryModal);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <SubScreenHeader
        header_text={'Add New Clinic'}
        back_button={() => navigation.goBack()}
        notification_button={() => navigation.navigate('Notification')}
        notificationButton={false}
      />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView
          style={{
            paddingHorizontal: moderateScale(20),
            marginTop: moderateScale(20),
            marginBottom: moderateScale(20),
            flex: 1,
          }}
          contentContainerStyle={{flexGrow: 1}}>
          <Text style={[styles.field_title, styles.extra_styles]}>
            Clinic Name
          </Text>
          <TextInput
            style={styles.textInpute}
            placeholder="Enter Name here..."
            placeholderTextColor={Colors.gray[400]}
          />
          <Text style={[styles.field_title, styles.extra_styles]}>
            Unit number
          </Text>
          <TextInput
            style={styles.textInpute}
            placeholder="Enter Unit number here..."
            placeholderTextColor={Colors.gray[400]}
          />
          <Text style={[styles.field_title, styles.extra_styles]}>
            Address 1
          </Text>
          <TextInput
            style={styles.textInpute}
            placeholder="Enter address here..."
            placeholderTextColor={Colors.gray[400]}
          />
          <Text style={[styles.field_title, styles.extra_styles]}>
            Address 2
          </Text>
          <TextInput
            style={styles.textInpute}
            placeholder="Enter address here..."
            placeholderTextColor={Colors.gray[400]}
          />
          <Text style={[styles.field_title, styles.extra_styles]}>City</Text>
          <TextInput
            style={styles.textInpute}
            placeholder="Enter city here..."
            placeholderTextColor={Colors.gray[400]}
          />
          <Text style={[styles.field_title, styles.extra_styles]}>
            Zip code
          </Text>
          <TextInput
            style={styles.textInpute}
            placeholder="Enter zip code here..."
            placeholderTextColor={Colors.gray[400]}
          />
          <CustomeDropdown
            selectedProfession={province.name}
            data={profession}
            title_text="Province"
            excaimination_image={false}
            setOpenDropDownModal={() => setProvinceModal(!provinceModal)}
            openModal={provinceModal}
            selectItem={selectProvince}
            placeholder_text="Select Item"
            closeModal={() => setProvinceModal(!provinceModal)}
          />
          <CustomeDropdown
            selectedProfession={country.name}
            data={profession}
            title_text="Country"
            excaimination_image={false}
            setOpenDropDownModal={() => setCountryModal(!countryModal)}
            openModal={countryModal}
            selectItem={selectCountry}
            placeholder_text="Select Item"
            closeModal={() => setCountryModal(!countryModal)}
          />
          {/* <Text style={[styles.field_title, styles.extra_styles]}>
            Clinic Address
          </Text>
          <View style={styles.textInpute_view}>
            <View
              style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
              <Image source={Icons.pin} style={styles.pin_icon} />
            </View>
            <View style={{flex: 10, justifyContent: 'center'}}>
              <TextInput
                style={{
                  color: Colors.black,
                  flex: 1,
                  paddingHorizontal: moderateScale(5),
                  padding: Platform.OS == 'ios' ? 5 : 0,
                }}
                multiline
                placeholder="Enter Address here..."
                placeholderTextColor={Colors.gray[400]}
              />
            </View>
          </View> */}

          <Text style={[styles.field_title, styles.extra_styles]}>
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

          <Text style={[styles.field_title, styles.extra_styles]}>
            Clinic Website
          </Text>
          <View style={styles.textInpute_view}>
            <View
              style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
              <Image
                source={Icons.web}
                style={{
                  width: moderateScale(17),
                  height: moderateScale(17),

                  // marginHorizontal: moderateScale(10),
                }}
              />
            </View>
            <View style={{flex: 10, justifyContent: 'center'}}>
              <TextInput
                style={{
                  color: Colors.black,
                  flex: 1,
                  paddingHorizontal: moderateScale(5),
                  padding: Platform.OS == 'ios' ? 5 : 0,
                }}
                multiline
                placeholder="Enter here..."
                placeholderTextColor={Colors.gray[400]}
              />
            </View>
          </View>
          <Text style={[styles.field_title, styles.extra_styles]}>
            Clinic Email
          </Text>
          <View style={styles.textInpute_view}>
            <View
              style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
              <Image source={Icons.pin} style={styles.pin_icon} />
            </View>
            <View style={{flex: 10, justifyContent: 'center'}}>
              <TextInput
                style={{
                  color: Colors.black,
                  flex: 1,
                  paddingHorizontal: moderateScale(5),
                  padding: Platform.OS == 'ios' ? 5 : 0,
                }}
                multiline
                placeholder="Enter here..."
                placeholderTextColor={Colors.gray[400]}
              />
            </View>
          </View>
          <CustomeDropdown
            selectedProfession={selectavg.name}
            data={profession}
            title_text="Avg. Recall (i)"
            excaimination_image={false}
            setOpenDropDownModal={() => setAvgModal(!avgModal)}
            openModal={avgModal}
            selectItem={selectAvg}
            placeholder_text="Select Item"
            closeModal={() => setAvgModal(!avgModal)}
          />
          <CustomeDropdown
            selectedProfession={software.name}
            data={profession}
            title_text="Software you use"
            excaimination_image={false}
            setOpenDropDownModal={() => setSoftwareModal(!softwareModal)}
            openModal={softwareModal}
            selectItem={selectSoftware}
            placeholder_text="Select Item"
            closeModal={() => setSoftwareModal(!softwareModal)}
          />

          <CustomeDropdown
            selectedProfession={radiography.name}
            data={profession}
            title_text="Radiography"
            excaimination_image={false}
            setOpenDropDownModal={() => setRadiographyModal(!radiographyModal)}
            openModal={radiographyModal}
            selectItem={selectRadiography}
            placeholder_text="Select Item"
            closeModal={() => setRadiographyModal(!radiographyModal)}
          />
          <CustomeDropdown
            selectedProfession={ultrasonic.name}
            data={profession}
            title_text="Ultrasonic"
            excaimination_image={false}
            setOpenDropDownModal={() => setUltrasonicModal(!ultrasonicModal)}
            openModal={ultrasonicModal}
            selectItem={selectUltrasonic}
            placeholder_text="Select Item"
            closeModal={() => setUltrasonicModal(!ultrasonicModal)}
          />

          <CustomeDropdown
            selectedProfession={charting.name}
            data={profession}
            title_text="Charting"
            excaimination_image={false}
            setOpenDropDownModal={() => setChartingModal(!chartingModal)}
            openModal={chartingModal}
            selectItem={selectCharting}
            placeholder_text="Select Item"
            closeModal={() => setChartingModal(!chartingModal)}
          />

          <CustomeDropdown
            selectedProfession={lunchTime.name}
            data={profession}
            title_text="Lunch Time"
            excaimination_image={false}
            setOpenDropDownModal={() => setLunchTimeModal(!lunchTimeModal)}
            openModal={lunchTimeModal}
            selectItem={selectLunchTime}
            placeholder_text="Select Item"
            closeModal={() => setLunchTimeModal(!lunchTimeModal)}
          />

          <CustomeDropdown
            selectedProfession={parkingAvailibility.name}
            data={profession}
            title_text="Parking Availibility"
            excaimination_image={false}
            setOpenDropDownModal={() =>
              setParkingAvailibilityModal(!parkingAvailibilityModal)
            }
            openModal={parkingAvailibilityModal}
            selectItem={selectParkingAvailibility}
            placeholder_text="Select Item"
            closeModal={() =>
              setParkingAvailibilityModal(!parkingAvailibilityModal)
            }
          />

          <Text style={[styles.field_title, styles.extra_styles]}>
            The clinic will provide
          </Text>
          <FlatList
            data={clicData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginVertical: moderateScale(3),
                  }}>
                  <TouchableOpacity
                    style={styles.touchabaleopacity_check}
                    onPress={() => setCheckValue(index)}>
                    {checkValue !== null ? (
                      checkValue === index ? (
                        <Image
                          source={Icons.check_green}
                          style={styles.checkbox_image}
                        />
                      ) : null
                    ) : null}
                  </TouchableOpacity>
                  <Text
                    onPress={() => setCheckValue(index)}
                    style={[
                      styles.field_title,
                      {marginLeft: moderateScale(10)},
                    ]}>
                    {item.name}
                  </Text>
                </View>
              );
            }}
          />
          <YesNoButton
            first_button_backgroundColor={Colors.borderColor}
            first_button_color={Colors.black}
            first_button_text={'Discard'}
            second_button_backgroundColor={Colors.sky_color}
            second_button_color={Colors.white}
            second_button_text={'Submit'}
            first_button_call={() => navigation.goBack()}
            second_button_call={() => navigation.goBack()}
            flex1={1}
            flex2={1}
            second_button_image={true}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddNewClinic;

const styles = StyleSheet.create({
  field_title: {
    color: Colors.black,
    fontSize: moderateScale(15),
    fontFamily: Fonts.satoshi_medium,
  },
  extra_styles: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.satoshi_medium,
    marginTop: moderateScale(20),
    marginBottom: moderateScale(7),
  },

  textInpute_view: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(4),
    borderWidth: 1,
    padding: moderateScale(5),
    borderColor: Colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pin_icon: {
    width: moderateScale(14.5),
    height: moderateScale(18),
    // marginBottom: verticalScale(5),
    // marginHorizontal: moderateScale(10),
  },
  textInpute: {
    color: Colors.black,
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    padding: moderateScale(10),
  },

  // phone number
  country_dropdown: {
    backgroundColor: Colors.gray[200],
    // paddingVertical: moderateScale(7),
    flex: 1,
    paddingHorizontal: moderateScale(2),
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
  touchabaleopacity_check: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(4),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(3),
  },
  checkbox_image: {width: moderateScale(15), height: moderateScale(15)},
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
