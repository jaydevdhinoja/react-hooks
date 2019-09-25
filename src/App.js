import React from 'react';
import './App.css';
import MenuItemsProvider from './components/MenuProvider';
import Orders from './components/Orders';

const App = () => (
  <MenuItemsProvider>
      <Orders/>
  </MenuItemsProvider>
);

export default App;
