import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ConformationModal from '../Component/HomeComponent/ConformationModal';
import SubScreenHeader from '../Component/HomeComponent/SubScreenHeader';
import VerifiedStaf_profile_clinic_details from '../Component/HomeComponent/VerifiedStaf_profile_clinic_details';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {JobList} from '../theme/ConstantArray';
import {Icons} from '../theme/icons';
import {Images} from '../theme/images';
import {moderateScale} from '../theme/scalling';
const VerifiedStaf_Profile = ({navigation}) => {
  const [openConfirmationModal, SetOpenConfirmationModal] = useState(false);
  const [openConfirmationModalDelet, SetOpenConfirmationModalDelet] =
    useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <SubScreenHeader
        header_text={'My Profile'}
        back_button={() => navigation.goBack()}
        notification_button={() => navigation.navigate('Notification')}
        notificationButton={true}
      />
      <ScrollView
        style={{
          paddingHorizontal: moderateScale(20),
          marginTop: moderateScale(20),
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
        <View style={styles.header_title}>
          <Text style={[styles.field_title, styles.header_title_extrastyle]}>
            My Clinics (3)
          </Text>
          <TouchableOpacity onPress={() => SetOpenConfirmationModal(true)}>
            <Text style={[styles.field_title, styles.add_clinic_text]}>
              + Add new
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={JobList}
          renderItem={({index}) => {
            return (
              <View
                style={[
                  styles.header_view,
                  {
                    marginTop: moderateScale(10),
                    marginBottom:
                      index === JobList.length - 1 ? moderateScale(20) : 0,
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
                      onPress={() => SetOpenConfirmationModalDelet(true)}
                      style={[
                        [
                          styles.editButton,
                          {marginHorizontal: moderateScale(10)},
                        ],
                      ]}>
                      <Image
                        source={Icons.delete_icon}
                        style={styles.delet_image}
                      />
                    </TouchableOpacity>
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
            );
          }}
        />
        <ConformationModal
          NoButton={() => SetOpenConfirmationModal(false)}
          YesButton={() => {
            navigation.navigate('AddNewClinic'),
              SetOpenConfirmationModal(false);
          }}
          header={'Add clinic by'}
          no_text="Enter Google Form"
          openConfirmationModal={openConfirmationModal}
          yes_text="Manually"
        />
        <ConformationModal
          NoButton={() => SetOpenConfirmationModalDelet(false)}
          YesButton={() => {
            SetOpenConfirmationModalDelet(false);
          }}
          header={'Do you want to delete this clinic?'}
          no_text="No"
          openConfirmationModal={openConfirmationModalDelet}
          yes_text="Yes"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifiedStaf_Profile;

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

  editButton: {
    borderRadius: moderateScale(50),
    alignSelf: 'flex-end',
    backgroundColor: Colors.gray[200],
    padding: moderateScale(10),
  },
  edit_image: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  delet_image: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  user_name: {
    alignSelf: 'center',
    fontSize: moderateScale(18),
    fontFamily: Fonts.satoshi_bold,
    color: Colors.black,
    marginVertical: moderateScale(10),
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
    fontSize: moderateScale(14),
    fontFamily: Fonts.satoshi_regular,
  },

  // clinic name

  header_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_title_extrastyle: {
    marginTop: moderateScale(20),
    fontSize: moderateScale(18),
    fontFamily: Fonts.satoshi_bold,
  },
  add_clinic_text: {
    marginTop: moderateScale(20),
    fontSize: moderateScale(15),
    fontFamily: Fonts.satoshi_bold,
    color: Colors.sky_color,
    textDecorationLine: 'underline',
  },
});
