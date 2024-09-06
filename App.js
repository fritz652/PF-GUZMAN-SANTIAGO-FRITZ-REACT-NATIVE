import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, TextInput, Text, FlatList } from 'react-native';
import ButtonPrimary from './src/componets/buttonPrimary/ButtonPrimary';
import {useState } from 'react';

//from https://www.npmjs.com/package/react-native-uuid  para  generar ids
import uuid from 'react-native-uuid';
import CardTask from './src/componets/CardTask/CardTask';
import ModalPrimary from './src/componets/modalPrimary/ModalPrimary';



export default function App() {
  
  const [taskName,setTaskName] =  useState('')
  const [tasks,setTasks] = useState([])

  const handleAddTask = () =>{
    const newTask = {
      id: uuid.v4(),
      name:taskName
    }

    setTasks([...tasks,newTask])
    setTaskName('')
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerInput}>
            <TextInput 
                style={styles.input} 
                placeholder= 'Ingrese una tarea'
                value={taskName}
                onChangeText={setTaskName}
                text="Agregar"
              /> 
            <ButtonPrimary onPress={handleAddTask} text='Agregar'/>
        </View>
        <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CardTask task={item}/>}
        />
        <StatusBar style="auto" />
      </View>
      <ModalPrimary text='¿Quiere agregar una tareas?'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:30,
    backgroundColor:'#c7e0f4',
  },

  containerInput:{
    backgroundColor:'#71afe5',
    flexDirection:'row',
    padding:10,
  },
  input:{
    borderColor:'black',
    borderWidth:1,
    padding:5,
    flex:2,
    margin:10,
    borderRadius:5,
    paddingStart:20,
  }
});
