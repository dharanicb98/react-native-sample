import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style = {styles.container}>
      <View style = {styles.box}>
        <Text style = {[styles.boxContainer , styles.box1]}>1</Text>
        <Text style = {[styles.boxContainer , styles.box2]}>2</Text>
        <Text style = {[styles.boxContainer , styles.box3]}>3</Text>
      </View>
      <Text>hello</Text>
    </View>
  )
}


const styles = StyleSheet.create({
      container : {
        padding : 50,
        borderWidth : 2 ,
        borderStyle : "solid",
        borderColor : "black"
      },
      box : {
        display : "flex",
        flexDirection : "row-reverse",
        justifyContent : "center",
        alignItems : "center",
        // flex : 1
      },
      boxContainer : {
        height: 100,
        width : 100, 
        color: "#fff", 
      },
      box1 : {
        backgroundColor : "#000000",
      },
      box2 : {
        backgroundColor : "#532356",
      },
      box3 : {
        backgroundColor : "#754578",
      },
})
