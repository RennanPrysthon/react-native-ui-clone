import React from 'react';
import { StatusBar } from 'react-native';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1a2239" />
      <Home />
    </>
  );
}
