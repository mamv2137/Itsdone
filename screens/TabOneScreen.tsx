import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

import PlusButton from '../components/PlusButton';

export default function TabOneScreen() {
  const [counter, setCounter] = React.useState(0);
  return (
    <Layout style={styles.container}>
      <PlusButton onPress={() => setCounter(counter + 1)} />
      <Text>Pressed {counter} times</Text>
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
