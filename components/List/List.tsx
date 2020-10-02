import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { CheckBox, Layout, Text } from '@ui-kitten/components';

const List = () => {
  return <ScrollView style={styles.containerList}>{renderItem()}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  containerList: {
    maxHeight: Dimensions.get('window').height,
  },
  row: {
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  standaloneRowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  standaloneRowFront: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    height: 50,
    borderRadius: 8,
    boxShadow: '9px 11px 53px -17px rgba(166,166,166,1)',
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCFCF',
    width: 40,
    height: 40,
    borderRadius: 100,
    padding: 10,
  },
});
