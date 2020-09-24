import React from 'react';
import { Icon as IconSVG } from '@ui-kitten/components';

const Icon = ({ width = 30, height = 30, ...props }) => (
  <IconSVG {...props} width={width} height={height} />
);

export default Icon;
