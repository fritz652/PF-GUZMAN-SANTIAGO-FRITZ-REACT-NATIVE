import { Pressable, StyleSheet, Text} from 'react-native'


const ButtonPrimary = ({text}) => {
  return (
    <Pressable  style={styles.button}title='Agregar Tarea'>
        <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    button:{
        padding:20,
        backgroundColor:'#0078d4',
        flex:1,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
      },
      textButton:{
        color:'white',
        fontSize:18
      }
})