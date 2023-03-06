import React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView, Dimensions, Modal } from "react-native";
import { AcademyDetailStyles } from "./AcademyDetailStyles";
import { StatusBar }  from 'expo-status-bar';
import TopInfo from '../../../../Components/DetailPageComponents/TopImage';
import AcademyInfo from '../../../../Components/DetailPageComponents/AcademyInfo';

export default function AcademyDetailScreen(){

  return (
    <View style={{flex:1}}>
      <StatusBar style="light" />
          
        <ScrollView>
        <TopInfo />
        <AcademyInfo />
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