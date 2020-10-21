import React, { useContext, useState } from 'react';
import { StoreContext } from './App';

export const SpidersForm = () => {
  const store = useContext(StoreContext);
  const [spider, setSpider] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    store.addSpider(spider);
    setSpider('');
  };
  const handleChange = ({ target }) => {
    setSpider(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="spidersForm"
        value={spider}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};
