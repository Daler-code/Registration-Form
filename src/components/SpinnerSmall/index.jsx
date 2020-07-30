import React from 'react';

import {
  SpinnerOverlay,
  SpinnerContainer
} from './styles';

const SpinnerSmall = (props) => (
  <SpinnerOverlay {...props}>
    <SpinnerContainer {...props} />
  </SpinnerOverlay>
);
export default SpinnerSmall;