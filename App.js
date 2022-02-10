import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "mobx-react-lite/batchingForReactNative";
import React from 'react';
import TaskDetail from './src/components/TaskDetail';
import TaskList from './src/components/TaskList';
import { NativeBaseProvider } from 'native-base';


const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BrickUp">
          <Stack.Screen name="TaskList" component={TaskList} />
          <Stack.Screen name="TaskDetail" component={TaskDetail} />
          <Stack.Screen name="Addtasks" component={TaskDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;


