import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({fname,lname})=>{
    return(
        <View>
            <Text>Your First Name is {fname}! and Last Name is {lname}</Text>
        </View>
    )
}

const CustomText = () => {
  return (
    <View style={{alignItems:'center',top:50}}>
      <MyCustomTextWith fname= "Tharit" lname ="Ruangphungluang"/>
      <MyCustomTextWith fname= "Lada" lname = "Watanadilogkul"/>
    </View>
  )
}

export default CustomText

const styles = StyleSheet.create({})