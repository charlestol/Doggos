import React from 'react';
import { Provider } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import configureStore from './src/store';
import DogApp from './src/DogApp';

const store = configureStore();

export default function App() {
  return (
    <LinearGradient
      colors={['#f5866e', '#e93c00']}
      style={{flex: 1}}
    >
      <Provider store={store}>
        <DogApp />
      </Provider>
    </LinearGradient>
  );
}
