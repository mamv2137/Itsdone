import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';

import Tags from '../constants/Tags';
import ItemList from './List/ItemList';

const data = Array.from(
  {
    length: 15,
  },
  () => ({
    id: uuidv4(),
    task: 'Tarea numero: ',
    tag: Tags[Math.floor(Math.random() * Tags.length)],
    isDeleted: false,
    time: '5:00 pm',
    isDone: false,
    hasReminder: false,
  })
);

const Home = () => {
  const [tasks, setTasks] = useState(data);
  const hasPreview = (idx) => (idx < 1 ? true : false);

  const onSelectItem = (item) => {
    console.log(item);
  };

  const onDeleteItem = (item) => console.log(item);

  const renderItem = () => {
    return tasks.map((item, idx) => (
      <ItemList
        hasPreview={hasPreview(idx)}
        hasReminder={item.hasReminder}
        isSelected={item.isDone}
        item={item}
        key={item.id}
        onDelete={onDeleteItem}
        onSelect={onSelectItem}
      />
    ));
  };

  return (
    <Layout style={styles.container}>
      <ScrollView>{renderItem()}</ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 200,
  },
});

export default Home;
