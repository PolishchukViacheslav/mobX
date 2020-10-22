import { useObserver } from 'mobx-react';
import React, { useContext } from 'react';
import { StoreContext } from './store/store';

export const SpidersHeader = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <h2>
      {store.getSpidersCount}
    </h2>
  ));
};
