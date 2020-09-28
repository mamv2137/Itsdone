import React, { useRef, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { Button, Layout, Text, Divider, Input } from '@ui-kitten/components';

import { ModalContext } from '../contexts/ModalContext';
import CloseButton from '../components/CloseButton';

const ModalCreateNewTask = () => {
  const modalizeRef = useRef<Modalize>(null);
  const { isOpen, closeModal } = useContext(ModalContext);

  useEffect(() => {
    onOpen();
  }, [isOpen]);

  const onOpen = () =>
    isOpen ? modalizeRef.current?.open() : modalizeRef.current?.close();
  return (
    <Portal>
      <Modalize
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
      >
        <Text style={styles.title} category="label">
          Add new task
        </Text>
        <Divider />
        <Layout style={styles.contentContainer}>
          <Input size="large" placeholder="Your task..." />
          <CloseButton onPress={closeModal} />
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
});

export default ModalCreateNewTask;
