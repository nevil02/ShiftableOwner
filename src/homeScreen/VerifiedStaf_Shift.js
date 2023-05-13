import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import VerifiedStaf_mainHeader from '../Component/HomeComponent/VerifiedStaf_mainHeader';
import YesNoButton from '../Component/HomeComponent/YesNoButton';
import {Fonts} from '../theme';
import Colors from '../theme/Colors';
import {
  JobList,
  profession,
  verifiedStaf_joblist,
} from '../theme/ConstantArray';
import {Icons} from '../theme/icons';
import {Images} from '../theme/images';
import {moderateScale} from '../theme/scalling';
import {AirbnbRating} from 'react-native-ratings';
import CustomeDropdown from '../Component/HomeComponent/CustomeDropdown';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import ConformationModal from '../Component/HomeComponent/ConformationModal';

const VerifiedStaf_Shift = ({navigation}) => {
  const refRBSheet = useRef();
  const [openRateandReviewModal, setOpenRateandReviewModal] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    name: '',
    _id: '',
  });
  const [openDropDownModal, setOpenDropDownModal] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isItem, setIsItem] = useState();
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [jobData, setJobData] = useState(verifiedStaf_joblist);
  const [openConfirmationModal, SetOpenConfirmationModal] = useState(false);
  const selectItem = item => {
    setSelectedItem({
      name: item.name,
      _id: item._id,
    });
    setOpenDropDownModal(!openDropDownModal);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };
  const selectdDate = date => {
    if (date !== null) {
      if (!startDate) {
        setStartDate(moment(date).format('MMM DD,YYYY'));
        setSelectedStartDate(date);
      } else if (!endDate) {
        setSelectedEndDate(date);
        setEndDate(moment(date).format('MMM DD,YYYY'));
        setDatePickerVisibility(!isDatePickerVisible);
      } else {
        setStartDate(moment(date).format('MMM DD,YYYY'));
        setSelectedStartDate(date);
        setEndDate('');
        setSelectedEndDate('');
      }
    } else {
      console.log('Invalid Date :::');
    }
  };
  const likeOrdislikeJob = () => {
    let temp = jobData;

    temp.map((mapItem, mapIndex) => {
      if (mapItem.id === isItem.id) {
        if (mapItem.isFavourite !== undefined) {
          if (mapItem.isFavourite === true) {
            mapItem.isFavourite = false;
          } else {
            mapItem.isFavourite = true;
          }
        } else {
          temp[mapIndex] = {...mapItem, isFavourite: true};
        }
      }
    });
    console.log('temp :::', JSON.stringify(temp));
    setJobData([...temp]);
    SetOpenConfirmationModal(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <VerifiedStaf_mainHeader
        header_text={'Shifts'}
        openNotification={() => navigation.navigate('Notification')}
        openProfile={() => navigation.navigate('VerifiedStaf_Profile')}
      />

      <View style={{padding: moderateScale(20), backgroundColor: Colors.white}}>
        <View style={styles.calender_view}>
          <TouchableOpacity
            style={styles.calender_first_View}
            onPress={showDatePicker}>
            <Image
              source={Icons.calenda_outline}
              style={styles.calender_image}
            />
            <Text style={styles.date_text}>
              {startDate == '' ? 'select Date' : startDate}
            </Text>
            <Image source={Icons.Dote} style={{marginLeft: moderateScale(5)}} />
            <Text style={styles.date_text}>{endDate}</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.openJob_text}>24 Jobs Open</Text>
          </View>
        </View>
        {isDatePickerVisible && (
          <CalendarPicker
          multipleDates={[startDate, endDate]}
          allowRangeSelection={true}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          onDateChange={selectdDate}
          // minDate={new Date()}
          selectedDayTextColor="#FFFFFF"
          selectedRangeStyle={{backgroundColor: Colors.blue[500]}}
          selectedRangeStartStyle={{backgroundColor: Colors.blue[500]}}
          selectedRangeEndStyle={{backgroundColor: Colors.blue[500]}}
        />
        )}
        <TouchableOpacity style={styles.openCalender_button} />
      </View>
      <FlatList
        data={jobData}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.flatlistmain_view,
                {
                  marginTop:
                    index === 0 ? moderateScale(30) : moderateScale(10),
                  marginBottom:
                    index === verifiedStaf_joblist.length - 1
                      ? moderateScale(20)
                      : 0,
                },
              ]}>
              <View style={styles.flatlist_header_view}>
                <Text style={styles.time_text}>{item.timestart}</Text>
                <Text style={styles.time_messure}>pm</Text>
                <Text style={styles.time_text}> - {item.timestart}</Text>
                <Text style={styles.time_messure}>pm</Text>

                {item.status === false ? (
                  <>
                    <Image
                      source={Icons.Dote}
                      style={{
                        marginLeft: moderateScale(10),
                        tintColor: Colors.gray[200],
                      }}
                    />
                    <Text
                      style={[
                        styles.time_text,
                        {marginLeft: moderateScale(10)},
                      ]}>
                      {item.price_between}
                    </Text>
                    <Text style={styles.time_messure}>/hr</Text>
                  </>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <Image
                      source={Icons.check_green}
                      style={styles.clock_image}
                    />
                    <Text
                      style={[
                        styles.waiting_text,
                        {
                          fontFamily: Fonts.satoshi_bold,
                          color: Colors.green[400],
                        },
                      ]}>
                      Completed
                    </Text>
                  </View>
                )}
              </View>
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
                      {alignSelf: 'flex-start', marginLeft: 0},
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
                  <TouchableOpacity
                    onPress={() => {
                      SetOpenConfirmationModal(true), setIsItem(item);
                    }}>
                    {item.isFavourite === true &&
                    item.isFavourite !== undefined ? (
                      <Image
                        source={Icons.heart_light}
                        style={styles.heart_icon}
                      />
                    ) : (
                      <Image source={Icons.dislike} style={styles.heart_icon} />
                    )}
                  </TouchableOpacity>
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
                    style={[
                      styles.approves_button,
                      {
                        backgroundColor:
                          item.status === false
                            ? Colors.red[50]
                            : Colors.sky_color,
                      },
                    ]}
                    onPress={() => {
                      item.status === false
                        ? refRBSheet.current.open()
                        : setOpenRateandReviewModal(true);
                    }}>
                    <Text
                      style={[
                        styles.semiregular_text,
                        styles.extrastyle_for_approved,
                        {
                          color:
                            item.status === false
                              ? Colors.red[500]
                              : Colors.white,
                        },
                      ]}>
                      {item.status === false ? 'Cancel' : 'Rate & review'}
                    </Text>
                  </TouchableOpacity>
                  <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    closeOnPressBack={true}
                    customStyles={{
                      draggableIcon: {
                        backgroundColor: Colors.gray[300],
                      },
                      container: {
                        borderTopLeftRadius: moderateScale(20),
                        borderTopRightRadius: moderateScale(20),
                      },
                    }}
                    height={400}
                    openDuration={250}>
                    <View style={styles.rbsheet_mainView}>
                      <Text style={styles.rbSheet_header_text}>
                        Cancelling this shift?
                      </Text>
                      <Text style={styles.textInpute_titlle}>
                        Please select your reason for cancelling
                      </Text>
                      <CustomeDropdown
                        selectedProfession={selectedItem.name}
                        data={profession}
                        title_text="Professional Education"
                        excaimination_image={false}
                        setOpenDropDownModal={() =>
                          setOpenDropDownModal(!openDropDownModal)
                        }
                        openModal={openDropDownModal}
                        selectItem={selectItem}
                        placeholder_text="Select Profession"
                        closeModal={() =>
                          setOpenDropDownModal(!openDropDownModal)
                        }
                      />

                      {/* <DropDownComp
                        selectedValue={selectedProfession.name}
                        placeholder_text="Select Profession"
                        data={profession}
                        labelField={'name'}
                        valueField={'name'}
                        dropdown={styles.dropdown}
                        selected={item =>
                          setSelectedProfession({
                            name: item.name,
                            _id: item._id,
                          })
                        }
                        selectedItem={styles.selectedItem}
                      /> */}

                      <View
                        style={{
                          padding: moderateScale(13),
                          marginVertical: moderateScale(10),
                          backgroundColor: Colors.blue[50],
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            source={Icons.alert_circle}
                            style={{
                              width: moderateScale(20),
                              height: moderateScale(20),
                              tintColor: Colors.blue[500],
                            }}
                          />
                          <Text
                            style={{
                              color: Colors.blue[500],
                              fontFamily: Fonts.satoshi_bold,
                              marginLeft: moderateScale(5),
                            }}>
                            Attention
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: Colors.blue[500],
                            fontFamily: Fonts.satoshi_regular,
                            marginLeft: moderateScale(5),
                            textAlign: 'justify',
                            marginTop: moderateScale(5),
                            fontSize: moderateScale(13),
                          }}>
                          We are sorry to hear that! Shiftable stives to
                          maintain professional standards. This professional
                          will be penalised appropriately.
                        </Text>
                      </View>
                      <YesNoButton
                        first_button_backgroundColor={Colors.borderColor}
                        first_button_color={Colors.black}
                        first_button_text={'Close this job'}
                        second_button_backgroundColor={Colors.sky_color}
                        second_button_color={Colors.white}
                        second_button_text={'See more professionals'}
                        first_button_call={() => refRBSheet.current.close()}
                        second_button_call={() => refRBSheet.current.close()}
                        flex1={1}
                        flex2={1}
                        second_button_image={false}
                      />
                    </View>
                  </RBSheet>
                  <Modal
                    transparent={true}
                    visible={openRateandReviewModal}
                    onRequestClose={() => setOpenRateandReviewModal(false)}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                      }}>
                      <Image
                        source={Images.BlackBackground}
                        style={styles.modal_backgroundimage}
                      />
                      <View style={styles.review_modal}>
                        <Text
                          style={[
                            styles.rbSheet_header_text,
                            {fontSize: moderateScale(17)},
                          ]}>
                          Dental Hygienist | 3 Hours
                        </Text>
                        <View style={styles.rating_mainView}>
                          <Text
                            style={[
                              styles.reviewrate_text,
                              {
                                fontSize: moderateScale(14),
                                color: Colors.black,
                              },
                            ]}>
                            Required for 1 day starting from Thursday, 20 Nov,
                            2022 from 14:00 to 17:00.
                          </Text>
                        </View>
                        <View
                          style={{
                            // height: Dimensions.get('window').height / 1.5,
                            maxHeight: Dimensions.get('window').height / 2,
                          }}>
                          <FlatList
                            data={JobList}
                            renderItem={({}) => {
                              return (
                                <>
                                  <View
                                    style={[
                                      styles.rating_mainView,
                                      {justifyContent: 'space-between'},
                                    ]}>
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        flex: 1,
                                      }}>
                                      <Image
                                        source={Images.profileImage}
                                        style={{
                                          width: moderateScale(60),
                                          height: moderateScale(60),
                                        }}
                                      />
                                      <View
                                        style={{
                                          flex: 1,
                                          paddingHorizontal: moderateScale(10),
                                        }}>
                                        <Text
                                          style={[
                                            styles.reviewrate_text,
                                            {
                                              fontSize: moderateScale(14),
                                              color: Colors.black,
                                              fontFamily: Fonts.satoshi_bold,
                                            },
                                          ]}>
                                          Aryan Abadeh
                                        </Text>
                                        <Text
                                          style={[
                                            styles.reviewrate_text,
                                            {marginTop: moderateScale(7)},
                                          ]}>
                                          1 (647) 948-6676
                                        </Text>
                                      </View>
                                    </View>
                                    <View
                                      style={{
                                        flex: 0.38,
                                        justifyContent: 'flex-start',
                                      }}>
                                      <Text
                                        style={[
                                          styles.reviewrate_text,
                                          {
                                            fontSize: moderateScale(18),
                                            color: Colors.black,
                                            fontFamily: Fonts.satoshi_bold,
                                          },
                                        ]}>
                                        $50/hour
                                      </Text>
                                    </View>
                                  </View>
                                  <View style={styles.review_modal_rating_view}>
                                    <Text
                                      style={
                                        styles.review_modal_rating_question
                                      }>
                                      1. How would you rate their work
                                      standards?
                                    </Text>
                                    <View
                                      style={{
                                        alignItems: 'flex-start',
                                        marginTop: moderateScale(3),
                                      }}>
                                      <AirbnbRating
                                        count={5}
                                        defaultRating={2}
                                        size={17}
                                        reviews={[]}
                                        showRating={false}
                                      />
                                    </View>
                                    <Text
                                      style={[
                                        styles.review_modal_rating_question,
                                        {marginTop: moderateScale(13)},
                                      ]}>
                                      2. Was the staff polite and professional?
                                    </Text>
                                    <View
                                      style={{
                                        alignItems: 'flex-start',
                                        marginTop: moderateScale(3),
                                      }}>
                                      <AirbnbRating
                                        count={5}
                                        defaultRating={2}
                                        size={17}
                                        reviews={[]}
                                        showRating={false}
                                      />
                                    </View>
                                    <Text
                                      style={[
                                        styles.review_modal_rating_question,
                                        {marginTop: moderateScale(13)},
                                      ]}>
                                      3. How much did you like working there?
                                    </Text>
                                    <View
                                      style={{
                                        alignItems: 'flex-start',
                                        marginTop: moderateScale(3),
                                      }}>
                                      <AirbnbRating
                                        count={5}
                                        defaultRating={2}
                                        size={17}
                                        reviews={[]}
                                        showRating={false}
                                      />
                                    </View>
                                  </View>
                                  <View style={styles.horizontal_line} />
                                </>
                              );
                            }}
                          />
                        </View>
                        <YesNoButton
                          first_button_backgroundColor={Colors.borderColor}
                          first_button_color={Colors.black}
                          first_button_text={'Cancel'}
                          second_button_backgroundColor={Colors.sky_color}
                          second_button_color={Colors.white}
                          second_button_text={'Submit Review'}
                          first_button_call={() =>
                            setOpenRateandReviewModal(false)
                          }
                          second_button_call={() =>
                            setOpenRateandReviewModal(false)
                          }
                          flex1={1}
                          flex2={1}
                          second_button_image={false}
                        />
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
              <ConformationModal
                NoButton={() => SetOpenConfirmationModal(false)}
                YesButton={() => likeOrdislikeJob()}
                header={
                  isItem !== undefined && isItem.isFavourite === true
                    ? ' Do you want to remove this job from favorites?'
                    : 'Do you want to add this job to favorites?'
                }
                no_text="No"
                openConfirmationModal={openConfirmationModal}
                yes_text="Yes"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default VerifiedStaf_Shift;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.blue[500],
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    justifyContent: 'space-between',
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
  },
  secondary_container: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: Fonts.satoshi_bold,
    fontSize: moderateScale(22),
    color: Colors.white,
  },

  /// calenderView

  calender_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calender_first_View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calender_image: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  date_text: {
    color: Colors.gray[700],
    fontFamily: Fonts.satoshi_medium,
    marginLeft: moderateScale(7),
  },
  openJob_text: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.satoshi_regular,
    color: Colors.gray[700],
  },
  openCalender_button: {
    width: moderateScale(60),
    height: moderateScale(4),
    backgroundColor: Colors.gray[300],
    marginTop: moderateScale(25),
    alignSelf: 'center',
    borderRadius: moderateScale(100),
  },

  // flatlist view

  flatlistmain_view: {
    padding: moderateScale(20),
    backgroundColor: Colors.white,
    marginHorizontal: moderateScale(20),
  },
  firstcolumn_view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: moderateScale(20),
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
    // borderWidth: 1,
    // borderColor: Colors.sky_color,
  },
  second_column: {
    flex: 1,
    alignItems: 'flex-end',
  },
  extrastyle_for_approved: {
    fontFamily: Fonts.satoshi_bold,
    marginLeft: 0,
  },

  // time mesure

  flatlist_header_view: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: moderateScale(13),
    borderBottomColor: Colors.gray[200],
  },
  time_text: {
    color: Colors.black,
    fontFamily: Fonts.satoshi_bold,
    fontSize: moderateScale(16),
  },
  time_messure: {
    color: Colors.black,
    fontFamily: Fonts.satoshi_regular,
  },

  clock_image: {
    width: moderateScale(15),
    height: moderateScale(15),
    marginTop: moderateScale(2),
  },
  waiting_text: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.satoshi_regular,
    color: Colors.gray[400],
    marginLeft: moderateScale(5),
  },

  // rbSheet style

  rbsheet_mainView: {
    backgroundColor: Colors.white,
    padding: moderateScale(15),
  },
  rbSheet_header_text: {
    color: Colors.black,
    fontSize: moderateScale(20),
    fontFamily: Fonts.satoshi_bold,
  },
  textInpute_titlle: {
    color: Colors.black,
    fontSize: moderateScale(14),
    fontFamily: Fonts.satoshi_medium,
    marginTop: moderateScale(15),
  },
  hours_text: {
    flex: 0.25,
    color: Colors.gray[500],
    textAlign: 'center',
    fontFamily: Fonts.satoshi_regular,
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

  // review modal
  reviewrate_text: {
    color: Colors.gray[500],
    fontSize: moderateScale(12),
    fontFamily: Fonts.satoshi_regular,
  },
  start_image: {
    width: moderateScale(12),
    height: moderateScale(12),
  },
  rating_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating_mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(7),
  },
  review_modal: {
    backgroundColor: Colors.white,
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(15),
    padding: moderateScale(20),
  },
  modal_backgroundimage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    opacity: 0.2,
  },
  review_modal_rating_view: {
    backgroundColor: Colors.lightblue,
    marginTop: moderateScale(10),
    padding: moderateScale(10),
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  review_modal_rating_question: {
    marginLeft: moderateScale(4),
    fontSize: moderateScale(13),
    color: Colors.black,
    fontFamily: Fonts.satoshi_medium,
  },
  horizontal_line: {
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 2,
    padding: moderateScale(10),
  },
  heart_icon: {
    width: moderateScale(18),
    height: moderateScale(16),
  },
});
