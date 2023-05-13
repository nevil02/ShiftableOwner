import React, {memo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ButtonHeader from '../Component/HomeComponent/ButtonHeader';
import SubScreenHeader from '../Component/HomeComponent/SubScreenHeader';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {moderateScale} from '../theme/scalling';
import {sortBy, verifiedStaf_joblist, clicData} from '../theme/ConstantArray';

import {Icons} from '../theme/icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import YesNoButton from '../Component/HomeComponent/YesNoButton';
import ClinicDetails from '../Component/HomeComponent/ClinicDetails';
import SimpleButton from '../Component/HomeComponent/SimpleButton';
import ApplicantView from '../Component/HomeComponent/ApplicantView';
import Verified_JobDetails from '../Component/HomeComponent/Verified_JobDetails';
import { SafeAreaView } from 'react-native-safe-area-context';
const VerifiedStaf_JobDetails = ({navigation}) => {
  const [selectButton, setSelectButton] = useState(1);
  const [sortby, setSortby] = useState('High to low');
  const [openClinicDetails, setOpenClinicDetails] = useState(false);
  const refRBSheet = useRef();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <SubScreenHeader
        header_text={'Job details'}
        back_button={() => navigation.goBack()}
        notification_button={() => navigation.navigate('Notification')}
        notificationButton={true}
        sub_title={'Dental Hygenist | 3 Hours'}
      />
      <ButtonHeader
        first_button="Applicants (120)"
        second_button="Job Details"
        selectFirstButton={() => setSelectButton(1)}
        selectsecondButton={() => setSelectButton(2)}
        selectedButton={selectButton}
      />
      {selectButton === 1 ? (
        <>
          <ApplicantView
            setSortby={item => setSortby(item.value)}
            sortByData={sortBy}
            sortby={sortby}
            ratingView={true}
            verifiedStaf_Data={verifiedStaf_joblist}
            approve_click={() => refRBSheet.current.open()}
          />
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            closeOnPressBack={true}
            customStyles={{
              draggableIcon: {
                backgroundColor: Colors.gray[300],
                width: moderateScale(50),
                marginTop: moderateScale(20),
              },
              container: {
                borderTopLeftRadius: moderateScale(20),
                borderTopRightRadius: moderateScale(20),
              },
            }}
            height={270}
            openDuration={250}>
            <View style={styles.rbsheet_mainView}>
              <Text style={styles.rbSheet_header_text}>Congratulation!</Text>
              <Text style={styles.description}>
                You have approved
                <Text
                  style={[
                    styles.description,
                    {fontFamily: Fonts.satoshi_bold},
                  ]}>
                  {' '}
                  Roger Kadama{' '}
                </Text>
                for this job. Their shift will be finalised once you close the
                job application. You have got
                <Text
                  style={[
                    styles.description,
                    {fontFamily: Fonts.satoshi_bold},
                  ]}>
                  {' '}
                  2 more selections{' '}
                </Text>
                left for this job.{' '}
                <Text
                  style={[
                    styles.description,
                    {fontFamily: Fonts.satoshi_bold},
                  ]}>
                  {' '}
                  Contact details{' '}
                </Text>
                will be shared once the job is closed.
              </Text>
              <YesNoButton
                first_button_backgroundColor={Colors.borderColor}
                first_button_color={Colors.black}
                first_button_text={'Close this job'}
                second_button_backgroundColor={Colors.sky_color}
                second_button_color={Colors.white}
                second_button_text={'Approve 2 more'}
                first_button_call={() => refRBSheet.current.close()}
                second_button_call={() => refRBSheet.current.close()}
                flex1={1}
                flex2={1}
                second_button_image={false}
              />
            </View>
          </RBSheet>
        </>
      ) : (
        <>
          <Verified_JobDetails
            setOpenClinicDetails={() =>
              setOpenClinicDetails(!openClinicDetails)
            }
            openClinicDetails={openClinicDetails}
            clicData={clicData}
            editandReportJob={() => navigation.navigate('CreateNewJob')}
            closejob={() => refRBSheet.current.open()}
          />
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            closeOnPressBack={true}
            customStyles={{
              draggableIcon: {
                backgroundColor: Colors.gray[300],
                width: moderateScale(50),
                marginTop: moderateScale(40),
              },
              container: {
                borderTopLeftRadius: moderateScale(20),
                borderTopRightRadius: moderateScale(20),
              },
            }}
            height={330}
            openDuration={250}>
            <View style={styles.rbsheet_mainView}>
              <Text style={styles.rbSheet_header_text}>Well done!</Text>
              <Text style={styles.description}>
                You have approved
                <Text
                  style={[
                    styles.description,
                    {
                      fontFamily: Fonts.satoshi_bold,
                      color: Colors.sky_color,
                      textDecorationLine: 'underline',
                    },
                  ]}>
                  {' '}
                  Roger Kadama{' '}
                </Text>
                for this job.
              </Text>
              <Text style={styles.description}>
                All job openings have been fulfilled and the shifts have been
                finalised. This job will be closed and all contact details will
                be shared with you. You can see the shift and contact details on
                the Shift’s screen.
              </Text>
              <SimpleButton
                imagePositio={false}
                image={Icons.completSetup}
                buttonname={'View upcoming Shifts'}
                buttonPress={() => {
                  refRBSheet.current.close();
                }}
              />
            </View>
          </RBSheet>
        </>
      )}
    </SafeAreaView>
  );
};

export default VerifiedStaf_JobDetails;

const styles = StyleSheet.create({
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

  // jobDetails

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
});
