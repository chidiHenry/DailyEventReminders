import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ReminderHome from './ReminderHome';
import CreateReminder from './CreateReminder';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="My Reminders" component={ReminderHome} />
      <Tab.Screen name="Create Reminder" component={CreateReminder} />
    </Tab.Navigator>
      </NavigationContainer>
      
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
