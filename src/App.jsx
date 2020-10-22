import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import './App.css';
import { myTimer, TimerView } from './mobx';
import { SpidersForm } from './SpidersForm';
import { SpidersHeader } from './SpidersHeader';
import { StoreContext, StoreProvider } from './store/store';

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
