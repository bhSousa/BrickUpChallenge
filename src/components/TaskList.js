import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TaskCard from './TaskCard';
import { useNavigation } from '@react-navigation/native';
import rootStore from '../rootStore';
import { observer } from 'mobx-react-lite';
import { Fab, Center, Box, Icon, } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const TaskList = (props) => { // passei para function component , estava class component

    const navigation = useNavigation();


    console.log(rootStore.taskStore.tasks)

    return (

        <View style={styles.container}>
            <View style={styles.card}>
                <StatusBar style="auto" />
                <Text style={styles.tittle}>Task's</Text>

                <FlatList style={styles.flatList}
                    data={rootStore.taskStore.getTasks()}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('TaskDetail', { task: { ...item } })}>
                            <TaskCard style={styles.AddTaskWrapper} data={item}></TaskCard>
                        </TouchableOpacity>
                    }
                />
            </View>

            <Center>
                <Fab onPress={() => navigation.navigate('TaskDetail')} renderInPortal={false} shadow={10} right={10} bottom={15} size="lg" icon={<Icon color="white" as={AntDesign} name="plus" size="7" />} />
            </Center>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'

    },
    card: {
        flex: 1,
        alignItems: 'center',

    },

    tittle: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    flatList: {
        width: '100%',
    },
    
});

export default (observer(TaskList));
