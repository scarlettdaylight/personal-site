import React, { createContext, useContext } from 'react';
import { useStaticRendering, useLocalStore } from 'mobx-react-lite';
import { createUIStore } from './uiStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    uiStore: createUIStore(),
  }));

  // store initialization here

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

export const useRootStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};


export const useUIStore = () => {
  const store = useRootStore();
  return store.uiStore;
};
