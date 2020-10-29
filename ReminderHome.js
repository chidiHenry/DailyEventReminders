import React from 'react';
import {StyleSheet, View, Text, Button, Image, Alert, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';
import { NavigationContainer } from '@react-navigation/native';
import CreateReminder from './CreateReminder';
import App from './App'


export default function ReminderHome({navigation}){
 
 function cancelNotifications(){
    PushNotification.cancelAllLocalNotifications()

 }


return(
    <> 
       
      
       <ImageBackground source ={require('./ap-bg.jpg')} style={{width: '100%', height: '100%'}} >
       <View style = {styles.topView}>
           <TouchableOpacity style = {styles.buttonStyle} onPress ={()=>{
               navigation.jumpTo('Create Reminder')
           }} >
               <Text style = {styles.buttonText}>SCHEDULE A REMINDER</Text>
           </TouchableOpacity>
       </View>
       <View style = {styles.inputContainer}>
           <TouchableOpacity style = {styles.buttonStyle} onPress = {cancelNotifications} >
               <Text style = {styles.buttonText}>CANCEL ALL REMINDERS</Text>
           </TouchableOpacity>
       </View>
      </ImageBackground>
    </>
)



};

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 5,
        marginTop: 15
      },
      buttonText:{
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
            
            
        },
        buttonStyle: {
            marginTop:5,
            borderWidth: 1,
            borderColor: '#007BFF',
            backgroundColor: 'orange',
            padding: 15,
          },
    topView:{
        marginTop: 60
    },
    imageStyle:{
        alignItems: "center"
    }
})