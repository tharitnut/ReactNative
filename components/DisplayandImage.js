import { StyleSheet,View,Text,Image } from 'react-native'
import React from 'react'

const DisplayandImage = () => {
  return (
    <View style={styles.container}>
        <Image
         style={styles.tinyLogo}
         source={require('../assets/react_logo.png')}
        />
        <Image
         style={styles.tinyLogo}
         source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
         
        />
    </View>
  )
}

export default DisplayandImage

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
    },
    tinyLogo:{
        widht:50,
        height:50
    },
    logo:{
        widhr:66,
        height:58
    },
})

