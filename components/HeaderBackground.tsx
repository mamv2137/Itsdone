import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const HeaderBackground = () => (
  <LinearGradient
    colors={['#0396FF', '#ABDCFF']}
    location={[0.25, 0.2]}
    start={[0, 1]}
    end={[1, 0]}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  />
);

export default HeaderBackground;
