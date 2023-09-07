'use client'

import { Provider } from 'react-redux'

import store from '@/app/_context/store'
import { ReactNode } from 'react';


const ClientProvider = ({ children } : { children : ReactNode }) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
};
export default ClientProvider;