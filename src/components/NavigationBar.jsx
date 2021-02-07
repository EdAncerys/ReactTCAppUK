import React from 'react';

import colors from '../config/colors';

export default function NavigationBar({ props }) {
  return (
    <div style={styles.container}>
      <div>Logo</div>
      <div>NavBar</div>
    </div>
  );
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'grid',
    alignContent: 'center',
    gridTemplateColumns: 'auto auto',
    height: '100px',
    borderBottom: `1px solid ${colors.silver}`,
    color: '#0275d8',
    fontSize: '4vh',
    userSelect: 'none',
    cursor: 'default',
    zIndex: 1,
  },
};
