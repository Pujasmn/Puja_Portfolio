import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';


import { AppContainer, MainContent } from './AppStyles';

const App = () => {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <Dashboard />
      </MainContent>
    </AppContainer>
  );
};

export default App;
