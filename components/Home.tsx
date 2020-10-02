import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
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
  const ItemRefs = useRef([]);
  const ScrollViewRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setTasks(data);
  }, []);

  useEffect(() => {
    return () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };
  }, [tasks]);

  ItemRefs.current = tasks.map(
    (task, idx) => (ItemRefs.current[idx] = React.createRef())
  );

  const getOpenedRows = () => {
    return ItemRefs.current.filter((ref) => ref.current.isOpen);
  };

  const getOpenedRow = (id) => {
    const openedIdxRow = ItemRefs.current.findIndex(
      (ref) => ref.current.props.swipeKey === id
    );
    return ItemRefs.current[openedIdxRow].current;
  };

  const getIndexOpenedRow = (id) => tasks.findIndex((task) => task.id === id);

  const onCloseAllRows = () =>
    ItemRefs.current.forEach((row) => row.current.closeRow());

  const onClosePrevRows = (id) => {
    const openedRows = getOpenedRows();
    openedRows.forEach(
      (row) => row.current.props.swipeKey !== id && row.current.closeRow()
    );
  };

  const hasPreview = (idx) => (idx < 1 ? true : false);

  const onSelectItem = (id) => {
    const newTasks = [...tasks];
    const idxSelectedItem = getIndexOpenedRow(id);
    const selectedRow = getOpenedRow(id);
    newTasks[idxSelectedItem] = {
      ...newTasks[idxSelectedItem],
      isDone: !newTasks[idxSelectedItem].isDone,
    };
    setTasks(newTasks);
    selectedRow.closeRow();
  };

  const onEditItem = (id) => {
    const openedRowRef = getOpenedRow(id);
    const idxSelectedItem = getIndexOpenedRow(id);
    console.log(openedRowRef);
  };

  const onDeleteItem = (id) => {
    const newTasks = [...tasks];
    newTasks.splice(
      newTasks.findIndex((task) => task.id === id),
      1
    );
    setTasks(newTasks);
    onCloseAllRows();
  };

  const onReminderItem = (id) => console.log(id, 'reminder');

  const onCloseRow = (item) => item.current.closeRow();

  const renderItem = () => {
    return tasks.map((item, idx) => {
      return (
        <ItemList
          ref={ItemRefs.current[idx]}
          hasPreview={hasPreview(idx)}
          hasReminder={item.hasReminder}
          isSelected={item.isDone}
          item={item}
          key={item.id}
          onDelete={onDeleteItem}
          onSelect={onSelectItem}
          onEdit={onEditItem}
          onReminder={onReminderItem}
        />
      );
    });
  };
  return (
    <Layout style={styles.container}>
      <ScrollView
        ref={ScrollViewRef}
        onContentSizeChange={() => {
          isAdding && ScrollViewRef.current?.scrollToEnd();
        }}
      >
        {renderItem()}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 200,
  },
});

export default Home;
