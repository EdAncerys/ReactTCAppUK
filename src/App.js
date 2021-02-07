import React from 'react';
import NavigationBar from './components/NavigationBar.jsx';
import FrontPageContent from './components/FrontPageContent.jsx';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <NavigationBar />
      <FrontPageContent />
    </div>
  );
}

const styles = {
  container: {},
};
