import React from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import { Layout, Text, List, ListItem } from '@ui-kitten/components';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import Icon from '../components/Icon';

const TrashIcon = (props) => <Icon name="trash-2-outline" {...props} />;

const colors = ['#FFD506', '#5DE61A', '#D10263', '#3044F2', '#F29130']; // TODO: move to Utils

const data = new Array(50).fill({
  title: 'Tarea numero: ',
  color: colors[Math.floor(Math.random() * colors.length)],
});

const Home = () => {
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)]; // TODO: move to Utils
  const hasPreview = (idx) => (idx < 1 ? true : false);
  const leftAction = () => console.log('left');
  const renderItem = () => {
    return data.map((item, idx) => (
      <SwipeRow
        style={{
          marginBottom: 14,
          marginLeft: 18,
          marginRight: 18,
        }}
        preview={hasPreview(idx)}
        key={idx}
        leftOpenValue={50}
        rightOpenValue={-75}
        onLeftActionStatusChange={leftAction}
      >
        <View style={styles.standaloneRowBack}>
          <Text>Tag</Text>
          <Text>
            <TrashIcon />
          </Text>
        </View>
        <View
          style={[
            styles.standaloneRowFront,
            {
              borderLeftColor: randomColor(),
              borderLeftWidth: 5,
            },
          ]}
        >
          <Text>{`${item.title} ${idx + 1}`}</Text>
          {/* <ListItem activeOpacity={1} title={`${item.title} ${index + 1}`} /> */}
        </View>
      </SwipeRow>
    ));
  };

  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.containerList}>{renderItem()}</ScrollView>
    </Layout>
  );
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
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: 50,
    borderRadius: 8,
    boxShadow: '9px 11px 53px -17px rgba(166,166,166,1)',
  },
});

export default Home;
