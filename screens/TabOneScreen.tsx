import React, { useRef, useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

import ModalScreen from './ModalScreen';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import Icon from '../components/Icon';

const TrashIcon = (props) => <Icon name="trash-2-outline" {...props} />;

export default function TabOneScreen() {
  return (
    <Layout style={styles.container}>
      <Layout>
        <Text>Today</Text>
        <SwipeRow leftOpenValue={75} rightOpenValue={-75}>
          <View style={styles.standaloneRowBack}>
            <Text style={styles.backTextWhite}>Left</Text>
            <Text style={styles.backTextWhite}>Right</Text>
          </View>
          <View style={styles.standaloneRowFront}>
            <Text>I am a standalone SwipeRow</Text>
          </View>
        </SwipeRow>
      </Layout>
      <ModalScreen />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: '#8BC645',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    height: 50,
  },
});
