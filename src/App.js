import React from 'react';
import NavigationBar from './components/NavigationBar.jsx';
import FrontPageContent from './components/FrontPageContent.jsx';

export const AppContext = React.createContext();

export default function App({ props }) {
  const manageAppContext = {};

  return (
    <AppContext.Provider
      value={{
        manageAppContext,
      }}
    >
      <div style={styles.container}>
        <NavigationBar />
        <FrontPageContent />
      </div>
    </AppContext.Provider>
  );
}

const styles = {
  container: {
    userSelect: 'none',
  },
};
