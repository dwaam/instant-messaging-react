import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { Chat } from './pages/chat';
import { client } from './api';

import './App.css';

function App() {
  return (
    <ApolloProvider client={client} className="container-fluid">
      <div className="App">
        <Chat />
      </div>
    </ApolloProvider>
  );
}

export default App;
