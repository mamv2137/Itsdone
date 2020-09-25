import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeName } from 'react-native';
import { Host } from 'react-native-portalize';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { ModalProvider } from '../contexts/ModalContext';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import * as firebase from 'firebase';
import firebaseConfig from '../constants/Firebase'; //TODO: Change place for this

firebase.initializeApp(firebaseConfig);

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <React.Fragment>
      <ModalProvider>
        <IconRegistry icons={EvaIconsPack} />

        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer linking={LinkingConfiguration}>
            <Host>
              <RootNavigator />
            </Host>
          </NavigationContainer>
        </ApplicationProvider>
      </ModalProvider>
    </React.Fragment>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
