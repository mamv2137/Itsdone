import React, { useRef, useEffect, useContext } from 'react';
import { Dimensions, FlatList, StyleSheet, View, Animated } from 'react-native';

import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { Layout, Text, Divider, Input } from '@ui-kitten/components';

import { ModalContext } from '../contexts/ModalContext';
import CloseButton from '../components/CloseButton';
import ItemTagList from '../components/List/ItemTagList';

import tags from '../constants/Tags';

// Comment SVG is for curve of top modal

const ModalCreateNewTask = () => {
  const modalizeRef = useRef<Modalize>(null);
  const listRef = useRef(null);
  const contentRef = useRef<Animated.AnimatedComponent<FlatList>>(null);
  const { isOpen, closeModal } = useContext(ModalContext);

  const onSelectTag = (index) => {
    listRef.current?.scrollToIndex({ animated: true, index });
  };

  const renderItem = ({ index, item: { text, colors } }) => {
    return (
      <View style={{ marginRight: 10, marginVertical: 2 }}>
        <ItemTagList
          size="big"
          text={text}
          color={colors.icon}
          onPress={() => onSelectTag(index)}
        />
      </View>
    );
  };

  useEffect(() => {
    onOpen();
  }, [isOpen]);

  const onOpen = () =>
    isOpen ? modalizeRef.current?.open() : modalizeRef.current?.close();
  return (
    <Portal>
      {/* <Svg height="100" width={screenWidth * 2}>
        <Ellipse
          cx={screenWidth / 2}
          cy="55"
          rx={screenWidth}
          ry="80"
          fill="yellow"
        />
      </Svg> */}
      <Modalize
        contentRef={contentRef}
        ref={modalizeRef}
        modalTopOffset={100}
        onClosed={closeModal}
        modalStyle={{
          backgroundColor: 'transparent',
        }}
        childrenStyle={{
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          backgroundColor: 'white',
          paddingTop: 40,
          paddingHorizontal: 5,
        }}
        handleStyle={{
          position: 'absolute',
          top: -10,
          height: 60,
          width: 60,
          borderRadius: 100,
          borderWidth: 0,
          backgroundImage:
            'linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%)',
          paddingHorizontal: 0,
          paddingVertical: 0,
          shadowColor: '#D939CD',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
        }}
      >
        <Layout style={styles.contentContainer}>
          <Text style={styles.title} category="label">
            Add new task
          </Text>
          <Input size="large" placeholder="Your task..." />
          <Divider />
          <FlatList
            ref={listRef}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={tags}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={{
              marginVertical: 10,
              paddingVertical: 10,
            }}
          />
          <Divider />
        </Layout>
      </Modalize>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

export default ModalCreateNewTask;
