import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fonts} from '../../theme';
import Colors from '../../theme/Colors';
import {moderateScale} from '../../theme/scalling';

const ClinicDetails = ({title, description, sameline}) => {
  return (
    <View style={styles.clinicdetails_view}>
      <View style={styles.clinicdetails_title_view}>
        <Text style={styles.clinic_details_text}>{title}</Text>
      </View>
      {sameline ? (
        <View style={styles.clinicdetails_title_view}>
          <Text
            style={[
              styles.clinic_details_text,
              {fontFamily: Fonts.satoshi_regular},
            ]}>
            {description}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default ClinicDetails;

const styles = StyleSheet.create({
  clinicdetails_title_view: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
  clinic_details_text: {
    color: Colors.black,
    fontFamily: Fonts.satoshi_bold,
    fontSize: moderateScale(14),
  },

  clinicdetails_view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(5),
  },
});
