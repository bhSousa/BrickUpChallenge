import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const TaskCard = ({ data }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.colText}>
                    <Text style={styles.text}>
                        {data.data} - {data.nome}
                    </Text>
                </View>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        height: 50,
        marginBottom: 5,
        marginVertical: 7,
        padding: 15,
        borderRadius: 15

    },
    wrapper: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        padding: 0,
        borderRadius: 10,
    },
    colText: {
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        paddingHorizontal: 10
    },
    colButtons: {
        backgroundColor: 'gray',
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default TaskCard;