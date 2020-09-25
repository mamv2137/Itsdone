import React, { useRef, useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

import ModalScreen from './ModalScreen';

export default function TabOneScreen() {
  return (
    <Layout style={styles.container}>
      {/* Contento of Home */}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
