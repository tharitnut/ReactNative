import { StyleSheet, Text, View ,Button} from 'react-native'
import React, {useState} from 'react'

const IncrementCounter = () => {

    const [age,setAge] = useState(23);

    const Increment = (n)=>{
        setAge(a=>a+n);
    }

  return (
    <View>
      <Text style={{fontSize:24,fontStyle:'bold'}}
        >Your age: {age}{"\n\n"}
      </Text>
      <Button
        title='+3'
        onPress={()=>Increment(3)}/>
      <Text>{"\n"}</Text>
      <Button
        title='+1'
        onPress={()=>Increment(1)}/>
    </View>
  )
}

export default IncrementCounter