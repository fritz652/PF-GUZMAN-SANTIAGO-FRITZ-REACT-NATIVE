import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Input = ({text}) => {
  return (
    <>
        <TextInput style={styles.input} placeholder= {text}/>
    </>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        borderColor:'black',
        borderWidth:1,
        padding:5,
        flex:2,
        margin:10,
        borderRadius:5,
        paddingStart:20,
      }
})