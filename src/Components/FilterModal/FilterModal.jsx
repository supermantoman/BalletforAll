import React from "react";
import { StyleSheet, Text, Image, View, Modal } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FilterModal() { 
   <Modal style={FilterModalStyles.container}>
     <TouchableOpacity><Text>가까운 순</Text></TouchableOpacity>
     <TouchableOpacity><Text>조회 순</Text></TouchableOpacity>
   </Modal>
}

const FilterModalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 16
  }
})