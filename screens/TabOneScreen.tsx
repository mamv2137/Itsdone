import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

import Home from '../components/Home';
import ModalScreen from './ModalScreen';

export default function TabOneScreen() {
  return (
    <Layout>
      <Home />
      <ModalScreen />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
