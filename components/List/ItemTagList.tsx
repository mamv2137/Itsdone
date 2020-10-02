import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

import { capitalizeString } from '../../utils/string';

const ItemTagList = ({ text, color }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'flex-start',
        width: 'auto',
        height: 20,
      }}
    >
      <View
        style={{
          width: 10,
          height: 10,
          backgroundColor: color,
          borderRadius: 50,
        }}
      ></View>
      <Text style={{ marginLeft: 4 }} category="c2">
        {capitalizeString(text)}
      </Text>
    </View>
  );
};

export default ItemTagList;
