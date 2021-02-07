import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar.jsx';
import FrontPageContent from './components/FrontPageContent.jsx';

export const AppContext = React.createContext();

export default function App({ props }) {
  const SESSION_STORAGE_KEY = 'TaxCalculator';
  const [salary, setSalary] = useState(false);
  const manageAppContext = {
    salary,
    setSalary,
  };

  useEffect(() => {
    console.log(salary);
    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify(manageAppContext)
    );
  }, [manageAppContext]);

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
