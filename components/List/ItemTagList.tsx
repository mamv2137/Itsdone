import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@ui-kitten/components';

import { capitalizeString } from '../../utils/string';

const ItemTagList = ({ text, color, onPress = null, size = 'regular' }) => {
  const backgroundColor = { backgroundColor: color };
  const sizeStyle = {
    big: {
      dot: {
        width: 15,
        height: 15,
      },
      text: {
        fontSize: 18,
      },
    },
    regular: {
      dot: {
        width: 10,
        height: 10,
      },
      text: {
        fontSize: 12,
      },
    },
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.dot, backgroundColor, sizeStyle[size].dot]}></View>
        <Text style={sizeStyle[size].text} category="c2">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-start',
    width: 'auto',
    height: 20,
    padding: 10,
  },
  dot: {
    borderRadius: 50,
    marginRight: 4,
  },
});

export default ItemTagList;
