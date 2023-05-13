import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {Fonts} from '../../theme';
import Colors from '../../theme/Colors';
import {Icons} from '../../theme/icons';
import {moderateScale} from '../../theme/scalling';
import ClinicDetails from './ClinicDetails';
import YesNoButton from './YesNoButton';

const Verified_JobDetails = ({
  openClinicDetails,
  setOpenClinicDetails,
  clicData,
  editandReportJob,
  closejob,
}) => {
  return (
    <ScrollView style={{paddingTop: moderateScale(20)}}>
      <View
        style={{
          backgroundColor: Colors.white,
          padding: moderateScale(10),
          marginHorizontal: moderateScale(20),
        }}>
        <Text
          style={[styles.rbSheet_header_text, {fontSize: moderateScale(18)}]}>
          Job Requirements
        </Text>
        <View style={styles.jobdetails_calender_view}>
          <View style={styles.calender_firstView}>
            <View style={styles.claender_under_view}>
              <Image
                source={Icons.calenda_outline}
                style={styles.calender_icon}
              />
              <Text style={styles.date_text}>Dates</Text>
            </View>
            <Text style={styles.dateshow_text}>25-28 Nov, 2022</Text>
          </View>
          <View style={styles.calender_firstView}>
            <View style={styles.claender_under_view}>
              <Image source={Icons.dollar} style={styles.calender_icon} />
              <Text style={styles.date_text}>Price rangea</Text>
            </View>
            <Text style={styles.dateshow_text}>$45-$60/hr</Text>
          </View>
        </View>
        <View style={{flex: 0.1}}></View>
        <View
          style={[
            styles.jobdetails_calender_view,
            {marginBottom: moderateScale(15)},
          ]}>
          <View style={styles.calender_firstView}>
            <View style={styles.claender_under_view}>
              <Image
                source={Icons.calenda_outline}
                style={styles.calender_icon}
              />
              <Text style={styles.date_text}>Qualification</Text>
            </View>
            <Text style={styles.dateshow_text}>Dental Hygienist, RDH</Text>
          </View>
          <View style={styles.calender_firstView}>
            <View style={styles.claender_under_view}>
              <Image source={Icons.dollar} style={styles.calender_icon} />
              <Text style={styles.date_text}>Timeslot</Text>
            </View>
            <Text style={styles.dateshow_text}>2:30pm - 6:50pm (6 hrs)</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.show_clinicdetails_button}
          onPress={() => setOpenClinicDetails(!openClinicDetails)}>
          <Text
            style={[styles.rbSheet_header_text, {fontSize: moderateScale(18)}]}>
            Clinic Details
          </Text>
          <Image
            source={Icons.chevron_down}
            style={[
              styles.chevron_down_image,
              {
                transform: [{rotate: openClinicDetails ? '180deg' : '0deg'}],
              },
            ]}
          />
        </TouchableOpacity>
        {openClinicDetails ? (
          <>
            <ClinicDetails
              title={'Avg Recall'}
              description={'50 mins'}
              sameline={true}
            />
            <ClinicDetails
              title={'Software you use'}
              description={'Dentrix'}
              sameline={true}
            />
            <ClinicDetails
              title={'Radiography'}
              description={'Phosphour Plates'}
              sameline={true}
            />
            <ClinicDetails
              title={'Ultrasonic'}
              description={'Cavitron'}
              sameline={true}
            />
            <ClinicDetails
              title={'Charting'}
              description={'Digital Charts'}
              sameline={true}
            />
            <ClinicDetails
              title={'Lunch Time'}
              description={'Paid'}
              sameline={true}
            />
            <ClinicDetails
              title={'Parking availability'}
              description={'Pay Parking @ Public Lot'}
              sameline={true}
            />
            <ClinicDetails
              title={'The clinic will provide'}
              description={'Digital Charts'}
              sameline={false}
            />
            <FlatList
              style={{flexWrap: 'wrap'}}
              // horizontal
              numColumns={2}
              data={clicData}
              renderItem={({item}) => {
                return (
                  <View style={styles.clinicdetails_flatlist_view}>
                    <Text style={styles.date_text}>{item.name}</Text>
                  </View>
                );
              }}
            />
          </>
        ) : null}
      </View>
      <View
        style={{
          paddingBottom: moderateScale(40),
          paddingHorizontal: moderateScale(20),
        }}>
        <YesNoButton
          first_button_backgroundColor={Colors.borderColor}
          first_button_color={Colors.black}
          first_button_text={'Edit & Repost'}
          second_button_backgroundColor={Colors.sky_color}
          second_button_color={Colors.white}
          second_button_text={'Close this Job'}
          first_button_call={editandReportJob}
          second_button_call={closejob}
          flex1={1}
          flex2={1}
          second_button_image={false}
        />
      </View>
    </ScrollView>
  );
};

export default Verified_JobDetails;

const styles = StyleSheet.create({
  jobdetails_calender_view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  calender_firstView: {
    flex: 1,
    padding: moderateScale(5),
  },
  claender_under_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calender_icon: {
    width: moderateScale(12),
    height: moderateScale(12),
  },

  date_text: {
    fontFamily: Fonts.satoshi_regular,
    fontSize: moderateScale(14),
    color: Colors.black,
    marginLeft: moderateScale(5),
  },
  dateshow_text: {
    color: Colors.gray[900],
    fontFamily: Fonts.roboto_Medium,
    fontSize: moderateScale(14),
    marginTop: moderateScale(3),
  },

  // clinic details
  show_clinicdetails_button: {
    paddingVertical: moderateScale(10),
    borderTopColor: Colors.borderColor,
    borderBottomColor: Colors.borderColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chevron_down_image: {
    width: moderateScale(20),
    height: moderateScale(19),
  },

  // clinic details

  clinicdetails_flatlist_view: {
    padding: moderateScale(10),
    backgroundColor: Colors.blue[50],
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(3),
    borderRadius: moderateScale(20),
  },
  rbSheet_header_text: {
    color: Colors.black,
    fontSize: moderateScale(20),
    fontFamily: Fonts.satoshi_bold,
  },
});
