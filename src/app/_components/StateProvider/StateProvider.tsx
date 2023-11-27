// Produced by Duong Trung Nguyen
// Produced by Duong Trung Nguyen

'use client'

import { Provider } from 'react-redux';
import store, { persistor } from '@/app/_context/store';
import { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

const StateProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StateProvider;
