import { StyleSheet, Text, View, Modal } from 'react-native'
import ButtonPrimary from '../buttonPrimary/ButtonPrimary'


export default function ModalPrimary({text}) {
  return (
    <Modal 
    visible={true} 
    animationType='fade'
    transparent
    >
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{text}</Text>
                <View style={styles.buttonContainer}>
                    <ButtonPrimary text="Sí"/>
                    <ButtonPrimary text="No"/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#00000088",
        flex:1,
        alignContent:"center",
        justifyContent:"center"
    },
    content:{
        width:"90%",
        height:300,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
    },
    buttonContainer:{
        flexDirection:"row",
    }
})