
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, SubmitEvent, } from 'react-native';
import rootStore from '../rootStore';



const TaskDetail = (props) => {

    var { task } = {};

    const [textTitulo, onChangeTextTitulo] = useState();
    const [textTarefa, onChangeTextTarefa] = useState();
    const [taskState, setTask] = useState();
    const [descricaoError, setDescricaoError] = useState();
    const [tituloError, setTituloError] = useState();
    const [isValid, setIsValid] = useState();
    const navigation = useNavigation();
    const route = useRoute();

    React.useEffect(() => {
        if (route?.params?.task) {
            const { task } = route.params;

            onChangeTextTitulo(task.nome);
            onChangeTextTarefa(task.descricao);
            setTask(task)
            setIsValid(true)
        }
    }, [])

    const addTask = () => {

        tituloValidator();
        descricaoValidator();

        if (isValid == true) {
            rootStore.taskStore.addTasks({ id: taskState?.id, nome: textTitulo, descricao: textTarefa, data: taskState?.data })
            navigation.navigate('TaskList');
        } else {
            alert('Todos os campos são obrigatórios.')
        }

    }

    const excluirTask = () => {
        rootStore.taskStore.deleteTasks(taskState?.id)
        navigation.navigate('TaskList')
    }

    const tituloValidator = () => {

        if (textTitulo == "" || textTitulo == undefined) {
            setTituloError("Título não pode ser nulo")
            setIsValid(false)
        }
    }

    const descricaoValidator = () => {

        if (textTarefa == "" || textTitulo == undefined) {
            setDescricaoError("Descrição não pode ser nula")
            setIsValid(false)
            console.info(isValid)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
                <Text>BrickUp</Text>

                <View style={styles.Titulotext}>
                    <Text>Título *</Text>
                </View>

                <SafeAreaView>
                    <TextInput
                        style={styles.inputTitulo}
                        onChangeText={onChangeTextTitulo}
                        value={textTitulo}
                        onBlur={() => setIsValid(true)}
                        placeholder="Digite aqui seu título"
                    />
                    {!isValid && tituloError != '' && <Text style={styles.errorMessage}>{tituloError}</Text>}
                </SafeAreaView>

                <View style={styles.Tarefatext}>
                    <Text>Descrição *</Text>
                </View>
                <SafeAreaView>
                    <TextInput
                        multiline={true}
                        style={styles.inputTarefa}
                        onChangeText={onChangeTextTarefa}
                        value={textTarefa}
                        multiline={true}
                        maxLength={200}
                        numberOfLines={5}
                        onBlur={() => setIsValid(true)}
                        placeholder="Digite aqui sua tarefa"
                    />

                    {!isValid && descricaoError != '' && <Text style={styles.errorMessage}>{descricaoError}</Text>}
                </SafeAreaView>


                <View style={styles.buttonWrapper}>

                    <TouchableOpacity onPress={() => excluirTask()}>
                        <Text style={styles.ButtonDelet}>
                            Excluir
                        </Text>
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => addTask()}>
                        <Text style={styles.ButtonSave}>
                            Salvar
                        </Text>
                    </TouchableOpacity >




                </View>

            </View>

        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
    },

    Tarefatext: {
        marginRight: 330,
        marginTop: 100
    },
    Titulotext: {
        marginRight: 350,
        marginTop: 50
    },
    inputTarefa: {
        flexDirection: 'row',
        height: 200,
        width: 400,
        margin: 10,
        borderWidth: 1,
        padding: 2,
        borderRadius: 20,
        textAlign: 'justify',
        paddingVertical: 15,
        paddingHorizontal: 15,
    },

    inputTitulo: {
        flexDirection: 'row',
        height: 50,
        width: 400,
        margin: 10,
        borderWidth: 1,
        padding: 2,
        borderRadius: 20,
        textAlign: 'justify',
        marginBottom: 2,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        flex: 1,
        width: 300,
        height: 20
    },

    ButtonSave: {
        justifyContent: 'center',
        color: 'white',
        elevation: 8,
        backgroundColor: "green",
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginBottom: 0,
    },
    ButtonDelet: {
        justifyContent: 'center',
        color: 'white',
        elevation: 5,
        backgroundColor: "red",
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginBottom: 0,
    },
    errorMessage: {
        color: 'red',
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 14

    }

});

export default TaskDetail;