import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CustomeDropdown from '../Component/HomeComponent/CustomeDropdown';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {clicData, profession} from '../theme/ConstantArray';
import {Icons} from '../theme/icons';
import {moderateScale} from '../theme/scalling';
import AuthHeader from '../Component/AuthComponent/AuthHeader';
import VerifiedStaf_profile_clinic_details from '../Component/HomeComponent/VerifiedStaf_profile_clinic_details';
import SimpleButton from '../Component/HomeComponent/SimpleButton';
import {SafeAreaView} from 'react-native-safe-area-context';

const VerifiedStaf_AddClinic = ({navigation}) => {
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

  const [avgModal, setAvgModal] = useState(false);
  const [softwareModal, setSoftwareModal] = useState(false);
  const [radiographyModal, setRadiographyModal] = useState(false);
  const [ultrasonicModal, setUltrasonicModal] = useState(false);
  const [chartingModal, setChartingModal] = useState(false);
  const [lunchTimeModal, setLunchTimeModal] = useState(false);
  const [parkingAvailibilityModal, setParkingAvailibilityModal] =
    useState(false);
  const [checkValue, setCheckValue] = useState(null);

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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <AuthHeader
        profileTextEnable={true}
        smallText="Thanks, Aryan. Please tell us about your clinic."
        bigText="Add your Clinic"
      />
      <ScrollView
        style={{
          paddingHorizontal: moderateScale(20),
          marginTop: moderateScale(20),
          marginBottom: moderateScale(20),
        }}>
        <View
          style={[
            styles.header_view,
            {
              marginTop: moderateScale(10),
              marginBottom: moderateScale(20),
            },
          ]}>
          <View style={styles.header_title}>
            <Text
              style={[
                styles.field_title,
                styles.header_title_extrastyle,
                {marginTop: 0},
              ]}>
              Abadeh Dentals
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddNewClinic')}
                style={styles.editButton}>
                <Image source={Icons.edit} style={styles.edit_image} />
              </TouchableOpacity>
            </View>
          </View>
          <VerifiedStaf_profile_clinic_details
            image={Icons.pin}
            text={
              'Unit 101 - 332 Sheppard Ave. E Toronto, Ontario, Canada M2N 3B4'
            }
            style={'pin'}
          />
          <VerifiedStaf_profile_clinic_details
            image={Icons.Phone}
            text={'1 (647) 948-6676'}
            style={'phone'}
          />
          <VerifiedStaf_profile_clinic_details
            image={Icons.pin}
            text={'contact@abadehdentals.com'}
            style={'email'}
          />
          <VerifiedStaf_profile_clinic_details
            image={Icons.web}
            text={'www.abadehdentals.com'}
            style={'web'}
          />
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
                  style={[styles.field_title, {marginLeft: moderateScale(10)}]}>
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
        <SimpleButton
          imagePositio={true}
          image={Icons.check_circle_light}
          buttonname={'Complete Setup'}
          buttonPress={() => navigation.navigate('VerifiedDentalStaffTab')}
          backPosition={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifiedStaf_AddClinic;

const styles = StyleSheet.create({
  field_title: {
    color: Colors.black,
    fontSize: moderateScale(15),
    fontFamily: Fonts.satoshi_medium,
  },
  header_view: {
    backgroundColor: Colors.white,
    padding: moderateScale(20),
  },
  extra_styles: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.satoshi_medium,
    marginTop: moderateScale(20),
    marginBottom: moderateScale(7),
  },
  editButton: {
    borderRadius: moderateScale(50),
    alignSelf: 'flex-end',
    backgroundColor: Colors.gray[200],
    padding: moderateScale(10),
  },
  header_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  edit_image: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  header_title_extrastyle: {
    marginTop: moderateScale(20),
    fontSize: moderateScale(18),
    fontFamily: Fonts.satoshi_bold,
  },
  pin_icon: {
    width: moderateScale(14.5),
    height: moderateScale(18),
    marginHorizontal: moderateScale(10),
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
});
