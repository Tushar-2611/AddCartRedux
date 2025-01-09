import React from 'react'
import { View, Text } from 'react-native'
export default function CheckoutItem(props : any) {
  return (
    <View style={{flexDirection:"row", justifyContent: 'space-between', width : '90%', backgroundColor:'#D9EAFD', padding : 20, borderRadius : 5, marginVertical : 10}}>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
        <Text>Quantity</Text>
    </View>
  )
}