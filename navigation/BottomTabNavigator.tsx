import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from '../components/Icon';
import PlusButton from '../components/PlusButton';

import { ModalContext } from '../contexts/ModalContext';

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TaskParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const { openModal } = useContext(ModalContext);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="home-outline" color={color} fill={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Task"
        component={TaskNavigator}
        options={{
          tabBarButton: (e) => {
            return (
              <View style={styles.PlusButtonContainer}>
                <PlusButton onPress={openModal} />
              </View>
            );
          },
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="Tasks"
        component={TasksNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="grid-outline" color={color} fill={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator<TabOneParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="TabOneScreen" component={TabOneScreen} />
    </HomeStack.Navigator>
  );
}
const TaskStack = createStackNavigator<TaskParamList>();

function TaskNavigator() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="TaskScreen"
        component={TabOneScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </TaskStack.Navigator>
  );
}

const TasksStack = createStackNavigator<TabTwoParamList>();

function TasksNavigator() {
  return (
    <TasksStack.Navigator>
      <TasksStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TasksStack.Navigator>
  );
}

const styles = StyleSheet.create({
  PlusButtonContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: 20, // space from bottombar
    height: 68,
    width: 68,
    marginLeft: Dimensions.get('window').width / 2 - 33,
    marginRight: 'auto',
    borderRadius: 68,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
