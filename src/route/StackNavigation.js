import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Auth Screen
import Splashscreen1 from '../authScreen/Splashscreen1';
import Login from '../authScreen/Login';
import ForgetPassword from '../authScreen/ForgetPassword';

// Home Stack

import VerifiedDentalStaffTab from './VerifiedDentalStaffTab';
import Notification from '../homeScreen/Notification';
import Profile from '../homeScreen/Profile';
import EditProfile from '../homeScreen/EditProfile';
import CreateNewJob from '../homeScreen/CreateNewJob';
import VerifiedStaf_JobDetails from '../homeScreen/VerifiedStaf_JobDetails';
import Splash from '../SplashScreen/Splash';
import NewVerified_profile from '../homeScreen/NewVerified_profile';
import AddNewClinic from '../homeScreen/AddNewClinic';
import Verified_ProfileDetails from '../homeScreen/Verified_ProfileDetails';
import VerifiedStaf_Profile from '../homeScreen/VerifiedStaf_Profile';
import VerifiedStaf_EditProfile from '../homeScreen/VerifiedStaf_EditProfile';
import VerifiedStaf_AddClinic from '../homeScreen/VerifiedStaf_AddClinic';
import ChangePassword from '../authScreen/changePassword';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Splash}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Splashscreen1" component={Splashscreen1} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

      <Stack.Screen
        name="VerifiedDentalStaffTab"
        component={VerifiedDentalStaffTab}
      />

      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen name="EditProfile" component={EditProfile} />

      <Stack.Screen name="CreateNewJob" component={CreateNewJob} />
      <Stack.Screen
        name="VerifiedStaf_JobDetails"
        component={VerifiedStaf_JobDetails}
      />
      <Stack.Screen
        name="NewVerified_profile"
        component={NewVerified_profile}
      />
      <Stack.Screen name="AddNewClinic" component={AddNewClinic} />
      <Stack.Screen
        name="Verified_ProfileDetails"
        component={Verified_ProfileDetails}
      />
      <Stack.Screen
        name="VerifiedStaf_Profile"
        component={VerifiedStaf_Profile}
      />
      <Stack.Screen
        name="VerifiedStaf_EditProfile"
        component={VerifiedStaf_EditProfile}
      />
      <Stack.Screen
        name="VerifiedStaf_AddClinic"
        component={VerifiedStaf_AddClinic}
      />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
