import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styled } from '@ui-kitten/components';

@styled('CircleButton')
class CircleButton extends React.Component {
  render() {
    const { eva, style, ...restProps } = this.props;

    return <TouchableOpacity style={[eva.style, style]} {...restProps} />;
  }
}

export default CircleButton;
