import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chatbot from './components/chatbot';

export default function App() {
  return (
    <Chatbot/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
