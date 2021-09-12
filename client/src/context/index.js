import React from 'react';

import { AuthProvaider } from './auth';

const AppProvaider = ({ children }) => {
  return <AuthProvaider>{children}</AuthProvaider>;
};

export default AppProvaider;
