import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import ButtonHeader from '../Component/HomeComponent/ButtonHeader';
import MainHeader from '../Component/HomeComponent/MainHeader';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {moderateScale} from '../theme/scalling';
import {jobforVerifiedStaf} from '../theme/ConstantArray';
import {Images} from '../theme/images';
import SimpleButton from '../Component/HomeComponent/SimpleButton';
import {Icons} from '../theme/icons';
import YesNoButton from '../Component/HomeComponent/YesNoButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import ConformationModal from '../Component/HomeComponent/ConformationModal';

const VerifiedStaf_Job = ({navigation}) => {
  const [selectButton, setSelectButton] = useState(1);
  const [jobforVerifiedStafState, setJobforVerifiedStafState] = useState([]);
  const [openConfirmationModal, SetOpenConfirmationModal] = useState(false);
  const [openConfirmationModalRequest, SetOpenConfirmationModalRequest] =
    useState(false);

  useEffect(() => {
    setTimeout(() => {
      setJobforVerifiedStafState(jobforVerifiedStaf);
    }, 3000);
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <MainHeader
        isShowLogo={true}
        bellAction={() => navigation.navigate('Notification')}
        openProfile={() => navigation.navigate('VerifiedStaf_Profile')}
      />
      <ButtonHeader
        first_button="Active"
        second_button="Closed"
        selectFirstButton={() => setSelectButton(1)}
        selectsecondButton={() => setSelectButton(2)}
        selectedButton={selectButton}
      />

      {jobforVerifiedStafState.length === 0 ? (
        <View style={styles.create_job_view}>
          <Image
            source={Images.illustrationHome}
            style={styles.crete_job_image}
          />
          <Text style={styles.big_text}>You haven’t posted any jobs yet.</Text>
          <Text style={styles.small_text}>
            Create a job now to find top-class verified dental professionals for
            your shifts.
          </Text>
          <SimpleButton
            imagePositio={true}
            image={Icons.plus}
            buttonname={'Create a Job'}
            buttonPress={() => navigation.navigate('CreateNewJob')}
          />
        </View>
      ) : (
        <View style={styles.flatlist_outer_view}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={jobforVerifiedStafState}
            renderItem={({item, index}) => {
              return (
                <View
                  style={[
                    styles.flatlist_mainView,
                    {
                      marginTop: index === 0 ? moderateScale(25) : 15,
                      marginBottom:
                        index === jobforVerifiedStafState.length - 1
                          ? moderateScale(20)
                          : 0,
                    },
                  ]}>
                  <View style={styles.jobtitle_view}>
                    <View style={{flex: 1}}>
                      <Text style={styles.job_title_text}>{item.name}</Text>
                      <Text style={styles.address_text}>{item.address}</Text>
                    </View>
                    {selectButton == 1 && (
                      <View style={styles.count_view}>
                        <Image source={Icons.team} style={styles.team_image} />
                        <Text style={styles.count_text}>{item.count}</Text>
                      </View>
                    )}
                  </View>
                  <View style={styles.horizontal_line} />
                  <Text style={styles.description_text}>
                    {item.description}
                  </Text>
                  <YesNoButton
                    first_button_backgroundColor={Colors.borderColor}
                    first_button_color={Colors.black}
                    first_button_text={
                      selectButton == 1 ? 'Close job' : 'View Details'
                    }
                    second_button_backgroundColor={Colors.sky_color}
                    second_button_color={Colors.white}
                    second_button_text={
                      selectButton == 1
                        ? 'View Applicants (120)'
                        : 'Request Invoices'
                    }
                    flex1={selectButton == 1 ? 0.5 : 1}
                    flex2={1}
                    second_button_image={false}
                    first_button_call={() =>
                      selectButton == 1
                        ? SetOpenConfirmationModal(true)
                        : navigation.navigate('VerifiedStaf_JobDetails')
                    }
                    second_button_call={() =>
                      selectButton == 1
                        ? navigation.navigate('VerifiedStaf_JobDetails')
                        :  SetOpenConfirmationModalRequest(true)
                    }
                  />
                </View>
              );
            }}
          />
        </View>
      )}
      {jobforVerifiedStafState.length !== 0 && (
        <TouchableOpacity
          style={styles.create_job_button}
          onPress={() => navigation.navigate('CreateNewJob')}>
          <Image
            source={Icons.plus}
            style={[styles.team_image, {tintColor: Colors.white}]}
          />
          <Text style={styles.crete_job_button_text}>Create Job</Text>
        </TouchableOpacity>
      )}
      <ConformationModal
        NoButton={() => SetOpenConfirmationModal(false)}
        YesButton={() => SetOpenConfirmationModal(false)}
        header={'Do you want to close this job?'}
        no_text="No"
        openConfirmationModal={openConfirmationModal}
        yes_text="Yes"
      />
      <ConformationModal
        NoButton={() => SetOpenConfirmationModalRequest(false)}
        YesButton={() => SetOpenConfirmationModalRequest(false)}
        header={'Do you want an invoice for this job?'}
        no_text="No"
        openConfirmationModal={openConfirmationModalRequest}
        yes_text="Yes"
      />
    </View>
  );
};

export default VerifiedStaf_Job;

const styles = StyleSheet.create({
  create_job_view: {
    flex: 1,
    marginTop: moderateScale(30),
    paddingHorizontal: moderateScale(20),
  },
  crete_job_image: {
    width: moderateScale(522),
    height: moderateScale(294),
    alignSelf: 'center',
  },
  big_text: {
    fontSize: moderateScale(19),
    fontFamily: Fonts.satoshi_bold,
    color: Colors.black,
    textAlign: 'center',
  },
  small_text: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.satoshi_regular,
    color: Colors.black,
    textAlign: 'center',
    marginHorizontal: moderateScale(20),
    marginVertical: moderateScale(10),
  },

  // flatlist styles
  flatlist_outer_view: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  flatlist_mainView: {
    // flex: 1,
    backgroundColor: Colors.white,
    padding: moderateScale(15),
    marginVertical: moderateScale(10),
  },
  job_title_text: {
    color: Colors.black,
    fontSize: moderateScale(16),
    fontFamily: Fonts.satoshi_medium,
  },
  jobtitle_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  address_text: {
    color: Colors.gray[700],
    fontSize: moderateScale(13),
    fontFamily: Fonts.satoshi_regular,
  },
  count_text: {
    color: Colors.black,
    fontSize: moderateScale(15),
    fontFamily: Fonts.satoshi_medium,
  },
  count_view: {
    alignItems: 'center',
    flex: 0.3,
    flexDirection: 'row',
    paddingVertical: moderateScale(5),
    justifyContent: 'center',
    backgroundColor: Colors.blue[50],
    borderRadius: moderateScale(20),
  },
  team_image: {
    width: moderateScale(18.75),
    height: moderateScale(13.75),
    marginHorizontal: moderateScale(3),
  },
  horizontal_line: {
    borderTopColor: Colors.gray[200],
    borderTopWidth: moderateScale(1),
    marginVertical: moderateScale(15),
  },
  description_text: {
    color: Colors.gray[900],
    fontSize: moderateScale(14),
    fontFamily: Fonts.satoshi_medium,
  },
  create_job_button: {
    backgroundColor: Colors.yellow[300],
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(12),
    position: 'absolute',
    bottom: 30,
    right: Dimensions.get('window').width / 3.1,
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  crete_job_button_text: {
    color: Colors.white,
    fontFamily: Fonts.satoshi_bold,
  },
});
