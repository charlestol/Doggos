import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import DogApp from './src/DogApp';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <DogApp />
    </Provider>
  );
}
