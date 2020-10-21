import { useLocalStore, useObserver } from 'mobx-react';
import React, { useContext } from 'react';
import './App.css';
import { myTimer, TimerView } from './mobx';
import { SpidersForm } from './SpidersForm';
import { SpidersHeader } from './SpidersHeader';

export const StoreContext = React.createContext();
const StoreProvider = ({ children }) => {
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

const SpidersList = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <ul className="spiders">
      {store.spiders.map((spider) => (
        <li key={spider}>{spider}</li>
      ))}
    </ul>
  ));
};

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <h1>Im Templ</h1>
        <SpidersHeader />
        <TimerView timer={myTimer} />
        <SpidersList />
        <SpidersForm />
      </div>
    </StoreProvider>
  );
}

export default App;
