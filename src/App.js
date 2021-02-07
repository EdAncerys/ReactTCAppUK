import React from 'react';
import NavigationBar from './components/NavigationBar.jsx';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <NavigationBar />
    </div>
  );
}

const styles = {
  container: {},
};
