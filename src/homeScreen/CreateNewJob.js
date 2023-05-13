import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import SubScreenHeader from '../Component/HomeComponent/SubScreenHeader';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {Icons} from '../theme/icons';
import {moderateScale} from '../theme/scalling';
import {profession, jobOpening} from '../theme/ConstantArray';
import CustomeDropdown from '../Component/HomeComponent/CustomeDropdown';
import YesNoButton from '../Component/HomeComponent/YesNoButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
// import {Calendar} from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';
import {SafeAreaView} from 'react-native-safe-area-context';

const CreateNewJob = ({navigation}) => {
  const [selectedProfession, setSelectedProfession] = useState({
    name: '',
    _id: '',
  });
  const [jobOpeningValue, setJobOpeningValue] = useState({
    name: '',
    _id: '',
  });
  const [clinic, setClinic] = useState({
    name: '',
    _id: '',
  });
  const [firstTimePicker, setFirstTimePicker] = useState(false);
  const [secondTimePicker, setSecondTimePicker] = useState(false);
  const [firsttime, setFirstTime] = useState(new Date());
  const [secondtime, setSecondTime] = useState(new Date());
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  // const initDate = '2023-02-26';
  // const [selected, setSelected] = useState(initDate);
  const [openProfessionModal, setOpenProfessionModal] = useState(false);
  const [clinicModal, setClinicModal] = useState(false);
  const [openJobModal, setOpenJobModal] = useState(false);

  // const marked = useMemo(
  //   () => ({
  //     [selected]: {
  //       selected: true,
  //       selectedColor: Colors.yellow[400],
  //     },
  //   }),
  //   [selected],
  // );
  const selectdDate = date => {
    console.log('STartsshjgasj', moment(new Date()).format('YYYY-MM-DD'));
    console.log('Date', date);
    if (date !== null) {
      if (!startDate) {
        setStartDate(moment(date).format('YYYY-MM-DD'));
      } else if (!endDate) {
        setEndDate(moment(date).format('YYYY-MM-DD'));
      } else {
        setStartDate(moment(date).format('YYYY-MM-DD'));
        setEndDate(null);
      }
    } else {
      console.log('Invalid Date :::');
    }
  };
  const showfirsttimePicker = () => {
    setFirstTimePicker(true);
  };
  const showsecondtimePicker = () => {
    setSecondTimePicker(true);
  };
  const hideTimePicker = () => {
    setFirstTimePicker(false);
    setSecondTimePicker(false);
  };
  const firsthandleConfirm = data => {
    setFirstTime(data);
    setFirstTimePicker(false);
  };
  const secondhandleConfirm = data => {
    setSecondTime(data);
    setSecondTimePicker(false);
  };

  const CustomeDropdownvalue = item => {
    setSelectedProfession({
      name: item.name,
      _id: item._id,
    });
    setOpenProfessionModal(!openProfessionModal);
  };

  const selectClinic = item => {
    setClinic({
      name: item.name,
      _id: item._id,
    });
    setClinicModal(!clinicModal);
  };

  const selectJobvalue = item => {
    setJobOpeningValue({
      name: item.name,
      _id: item._id,
    });
    setOpenJobModal(!openJobModal);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <SubScreenHeader
        header_text={'Create new Job'}
        back_button={() => navigation.goBack()}
        notification_button={() => navigation.navigate('Notification')}
        notificationButton={false}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <CustomeDropdown
            selectedProfession={selectedProfession.name}
            data={profession}
            title_text="Select Clinic"
            excaimination_image={false}
            setOpenDropDownModal={() =>
              setOpenProfessionModal(!openProfessionModal)
            }
            openModal={openProfessionModal}
            selectItem={CustomeDropdownvalue}
            placeholder_text="Select Clinic"
            closeModal={() => setOpenProfessionModal(!openProfessionModal)}
          />
          <CustomeDropdown
            selectedProfession={clinic.name}
            data={profession}
            title_text="Professional Education"
            excaimination_image={false}
            setOpenDropDownModal={() => setClinicModal(!clinicModal)}
            openModal={clinicModal}
            selectItem={selectClinic}
            placeholder_text="Select Profession"
            closeModal={() => setClinicModal(!clinicModal)}
          />
          <Text
            style={[styles.field_title, {marginVertical: moderateScale(13)}]}>
            Select Dates
          </Text>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <CalendarPicker
              multipleDates={[startDate, endDate]}
              allowRangeSelection={true}
              selectedStartDate
              selectedEndDate
              onDateChange={selectdDate}
              minDate={new Date()}
              selectedDayTextColor="#FFFFFF"
              selectedRangeStyle={{backgroundColor: Colors.blue[500]}}
              selectedRangeStartStyle={{backgroundColor: Colors.blue[500]}}
              selectedRangeEndStyle={{backgroundColor: Colors.blue[500]}}
            />
          </View>
          <View style={styles.selectDate_main_view}>
            <View style={{flex: 1}}>
              <Text style={[styles.field_title, {marginTop: moderateScale(5)}]}>
                From
              </Text>
              <TouchableOpacity
                onPress={showfirsttimePicker}
                style={[
                  styles.selectDate_button,
                  {padding: moderateScale(10)},
                ]}>
                <Image source={Icons.clock} style={styles.clock_image} />
                <Text style={styles.selectedtime_text}>
                  {moment(firsttime).format('hh:mm A')}
                </Text>
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={firstTimePicker}
              mode="time"
              date={firsttime}
              onConfirm={firsthandleConfirm}
              onCancel={hideTimePicker}
            />
            <View style={{flex: 0.2}} />
            <View style={{flex: 1}}>
              <Text style={[styles.field_title, {marginTop: moderateScale(5)}]}>
                To
              </Text>
              <TouchableOpacity
                onPress={showsecondtimePicker}
                style={[
                  styles.selectDate_button,
                  {padding: moderateScale(10)},
                ]}>
                <Image source={Icons.clock} style={styles.clock_image} />
                <Text style={styles.selectedtime_text}>
                  {moment(secondtime).format('hh:mm A')}
                </Text>
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={secondTimePicker}
              mode="time"
              date={secondtime}
              onConfirm={secondhandleConfirm}
              onCancel={hideTimePicker}
            />
          </View>

          <CustomeDropdown
            selectedProfession={jobOpeningValue.name}
            data={jobOpening}
            title_text="Job Opening"
            excaimination_image={false}
            setOpenDropDownModal={() => setOpenJobModal(!openJobModal)}
            openModal={openJobModal}
            selectItem={selectJobvalue}
            placeholder_text="Select Job"
            closeModal={() => setOpenJobModal(!openJobModal)}
          />
          <View style={styles.selectDate_main_view}>
            <View style={{flex: 1}}>
              <Text
                style={[styles.field_title, {marginTop: moderateScale(13)}]}>
                Select Min Price
              </Text>
              <View
                style={[
                  styles.selectDate_button,
                  {paddingHorizontal: moderateScale(10)},
                ]}>
                <Image source={Icons.dollar} style={styles.dollar_image} />
                <TextInput
                  style={styles.textInpute_style}
                  placeholder={'$45'}
                  placeholderTextColor={Colors.gray[500]}
                />
              </View>
            </View>
            <View style={{flex: 0.2}} />
            <View style={{flex: 1}}>
              <Text
                style={[styles.field_title, {marginTop: moderateScale(13)}]}>
                Select Max Price
              </Text>
              <View
                style={[
                  styles.selectDate_button,
                  {paddingHorizontal: moderateScale(10)},
                ]}>
                <Image source={Icons.dollar} style={styles.dollar_image} />

                <TextInput
                  style={styles.textInpute_style}
                  placeholder={'$90'}
                  placeholderTextColor={Colors.gray[500]}
                />
              </View>
            </View>
          </View>
          <View style={{paddingBottom: moderateScale(20)}}>
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
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateNewJob;

const styles = StyleSheet.create({
  header_mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.blue[500],
    alignItems: 'center',
  },
  header_firstView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(20),
    paddingHorizontal: moderateScale(5),
  },
  header_title_text: {
    color: Colors.white,
    fontFamily: Fonts.satoshi_medium,
    fontSize: moderateScale(17),
  },
  back_arrow_image: {
    width: moderateScale(18),
    height: moderateScale(16),
  },
  bell_arrow_image: {
    width: moderateScale(18),
    height: moderateScale(20),
  },
  scrollView: {
    paddingHorizontal: moderateScale(20),
    marginTop: moderateScale(20),
    flex: 1,
  },
  field_title: {
    color: Colors.black,
    fontSize: moderateScale(15),
    fontFamily: Fonts.satoshi_medium,
  },

  // select date view
  selectDate_main_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectDate_button: {
    backgroundColor: Colors.white,

    borderWidth: 1,
    borderColor: Colors.gray[200],
    borderRadius: moderateScale(4),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: moderateScale(5),
  },
  clock_image: {
    width: moderateScale(13),
    height: moderateScale(13),
    tintColor: Colors.gray[900],
  },
  dollar_image: {
    width: moderateScale(16),
    height: moderateScale(16),
    tintColor: Colors.gray[900],
  },
  selectedtime_text: {
    color: Colors.gray[900],
    fontFamily: Fonts.satoshi_regular,
    fontSize: moderateScale(14),
    marginLeft: moderateScale(5),
  },
  textInpute_style: {
    color: Colors.gray[900],
    fontFamily: Fonts.satoshi_regular,
    // paddingVertical: moderateScale(10),
    fontSize: moderateScale(14),
    flex: 1,
    marginLeft: moderateScale(3),
    alignSelf: 'center',
    padding: Platform.OS == 'ios' ? 10 : 0,
  },
});
