import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from './Icon';
import { Button } from '@ui-kitten/components';

const CloseCircleIcon = (props) => <Icon name="close-outline" {...props} />;

const PlusButton = (props) => (
  <Button
    style={styles.ButtonCircle}
    appearance="ghost"
    size="giant"
    {...props}
  >
    {(evaProps) => <CloseCircleIcon {...evaProps} fill="#fff" />}
  </Button>
);

const styles = StyleSheet.create({
  ButtonCircle: {
    borderRadius: 100,
    borderWidth: 0,
    backgroundImage: 'linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%)',
    paddingHorizontal: 0,
    paddingVertical: 0,
    shadowColor: '#D939CD',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
});

export default PlusButton;
