import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { Layout, Text, Card } from '@ui-kitten/components';

import Icon from '../components/Icon';
import Tags from '../constants/Tags';

import { capitalizeString } from '../utils/string';

export default function TabTwoScreen() {
  const handlePress = (item) => console.log(item);
  const addCategory = () => console.log('new Category');

  const renderAddCard = () => (
    <Card onPress={addCategory} style={styles.cardContainer}>
      <View style={[styles.iconContainer, styles.addIconcontainer]}>
        <Icon name="plus" fill="#8F9BB3" width="40" height="40" />
      </View>
      <Text category="label" style={styles.text}>
        Add Category
      </Text>
    </Card>
  );

  const renderCard = () => {
    return Tags.map((tag) => (
      <Card
        key={tag.id}
        onPress={() => handlePress(tag)}
        style={styles.cardContainer}
      >
        <View
          style={[styles.iconContainer, { backgroundColor: tag.colors.back }]}
        >
          <Icon name={tag.icon} fill={tag.colors.icon} width="40" height="40" />
        </View>
        <Text category="label" style={styles.text}>
          {capitalizeString(tag.text)}
        </Text>
        <Text category="s2" appearance="hint" style={styles.text}>
          24 tasks
        </Text>
      </Card>
    ));
  };
  return (
    <ScrollView>
      <Layout>
        <Text style={styles.titleContainer} category="h6" appearance="hint">
          Projects
        </Text>
      </Layout>
      <Layout style={styles.cardsContainer}>
        {renderAddCard()}
        {renderCard()}
      </Layout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 14,
    marginTop: 6,
    letterSpacing: 1,
  },
  cardsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: 4,
  },
  cardContainer: {
    alignItems: 'center',
    boxShadow: '9px 11px 53px -17px rgba(166,166,166,1)',
    height: 160,
    justifyContent: 'center',
    margin: 8,
    width: 160,
  },
  text: { alignSelf: 'center', marginTop: 5, fontSize: 16 },
  addIconcontainer: { backgroundColor: '#C5CEE0', alignSelf: 'center' },
  iconContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCFCF',
    width: 65,
    height: 65,
    borderRadius: 100,
    padding: 10,
  },
});
