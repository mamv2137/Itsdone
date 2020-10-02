import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { CheckBox, Layout, Text } from '@ui-kitten/components';

import { SwipeRow } from 'react-native-swipe-list-view';
import Icon from '../Icon';

const TrashIcon = (props) => <Icon name="trash-2-outline" {...props} />;
const EditIcon = (props) => <Icon name="edit" {...props} />;

const ItemList = ({
  item,
  isSelected,
  hasReminder,
  hasPreview,
  onSwipe = () => null,
  onDelete = () => null,
  onSelect = () => null,
  onEdit = () => null,
  onReminder = () => null,
}) => {
  const statusCheckbox = isSelected ? 'success' : 'basic';
  const iconColor = hasReminder ? '#FFDC00' : '#D9D9D9';
  const selectedStyle = {
    color: '#D9D9D9',
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  };
  const isItemSelected = isSelected ? selectedStyle : {};
  return (
    <SwipeRow
      style={{
        marginBottom: 14,
        marginLeft: 18,
        marginRight: 18,
      }}
      onRowPress={() => onSelect(item.id)}
      preview={hasPreview}
      key={item.id}
      swipeKey={item.id}
      swipeGestureEnded={onSwipe}
      leftOpenValue={70}
      rightOpenValue={-120}
      shouldItemUpdate={(curr, newObj) => true}
    >
      <View style={styles.standaloneRowBack}>
        <Text>{item.tag.text}</Text>
        <View style={styles.rowBackRight}>
          <TouchableOpacity style={[styles.button, styles.editButton]}>
            <EditIcon
              fill="#F9C229"
              width="20"
              height="20"
              onPress={() => onEdit(item.id)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.deleteButton]}>
            <TrashIcon
              fill="#FB3636"
              width="20"
              height="20"
              onPress={() => onDelete(item.id)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styles.standaloneRowFront,
          {
            borderLeftColor: item.tag.colors.icon,
            borderLeftWidth: 5,
          },
        ]}
      >
        <View style={styles.itemContainer}>
          <CheckBox
            status={statusCheckbox}
            onChange={() => onSelect(item.id)}
            checked={isSelected}
          />
          <Text category="p2" appearance="hint">
            5:00 pm
          </Text>
          <Text category="s2" style={isItemSelected}>{`${item.task} ${
            item.key + 1
          }`}</Text>
        </View>
        <TouchableOpacity onPress={() => onReminder(item.id)}>
          <Icon name="bell" width={25} height={25} fill={iconColor} />
        </TouchableOpacity>
      </View>
    </SwipeRow>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  containerList: {
    maxHeight: Dimensions.get('window').height,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    alignItems: 'center',
  },
  rowBackRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90,
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
    justifyContent: 'space-around',
    height: 50,
    borderRadius: 8,
    boxShadow: '9px 11px 53px -17px rgba(166,166,166,1)',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 100,
    padding: 10,
  },
  deleteButton: {
    backgroundColor: '#FFCFCF',
  },
  editButton: {
    backgroundColor: '#FFEE9B',
  },
});

export default ItemList;
