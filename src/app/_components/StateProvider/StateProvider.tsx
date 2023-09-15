// Produced by Duong Trung Nguyen

'use client'

import { Provider } from 'react-redux'
import store from '@/app/_context/store'
import { ReactNode } from 'react';


const StateProvider = ({ children } : { children : ReactNode }) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
};
export default StateProvider;