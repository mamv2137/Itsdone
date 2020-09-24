import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

export default function TabOneScreen() {
  const [counter, setCounter] = React.useState(0);
  return (
    <Layout style={styles.container}>
      <Button onPress={() => setCounter(counter + 1)}>BUTTON</Button>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
