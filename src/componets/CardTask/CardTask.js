import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardTask = ({task}) => {
  return (
    <View style={styles.container} key={task.id}>
            <Text style={styles.text}>Nombre: {task.name}</Text>
    </View>
  )
}

export default CardTask

const styles = StyleSheet.create({
    container:{
        width:'80%',
        backgroundColor:'#71afe5',
        marginHorizontal:'10%',
        marginVertical:10,
        padding:20,
        borderRadius:5
    },
    text:{
        color: "#004578",
    }
})