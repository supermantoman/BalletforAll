import React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView, Dimensions, Modal } from "react-native";
import { AcademyDetailStyles } from "./AcademyDetailStyles";
import { StatusBar }  from 'expo-status-bar';
import TopInfo from '../../../../Components/DetailPageComponents/TopImage';

export default function AcademyDetailScreen(){

  return (
    <View style={{flex:1}}>
      <StatusBar style="light" />
        
        <View style={{flex:0.5}}>
          <TopInfo />
        </View>      
        <ScrollView>
        {/* <DetailTab />
        <InstructorInfo />
        <FacilityPhoto />
        <ClassSchedule />
        <TuitionFee />
        <SaleAndTerms /> */}

       </ScrollView>
    </View>
    
  )
}