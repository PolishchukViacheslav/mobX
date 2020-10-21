import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

class Timer {
  constructor() {
    this.secondsPassed = 0;
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

export const myTimer = new Timer();
export const TimerView = observer(({ timer }) => (
  <button
    type="button"
    onClick={() => timer.reset()}
  >
    Seconds passed:
    {timer.secondsPassed}
  </button>
));

setInterval(() => {
  myTimer.increase();
}, 1000);
