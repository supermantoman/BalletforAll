import { StyleSheet, View, Text, Button, Image, ScrollView, Dimensions, Modal } from "react-native";
import TabNavigator, {  } from "../../../Components/TabNavigator/TabNavigator";
import { StatusBar }  from 'expo-status-bar';

export default function MapDefaultScreen (){
  
  return (
    <View style={{flex:1}}>
      <TabNavigator/>
    </View>
  )
}