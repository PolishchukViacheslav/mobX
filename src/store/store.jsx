import React from 'react';
import { useLocalStore } from 'mobx-react';

export const StoreContext = React.createContext();
export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    spiders: ['Caracurt'],
    addSpider: (spider) => {
      store.spiders.push(spider);
    },
    get getSpidersCount() {
      return store.spiders.length;
    },
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
