import React from 'react';

import colors from '../config/colors';

export default function NavigationBar({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>Pay Tax Calculator</div>
      <div>NavBar</div>
    </div>
  );
}

const styles = {
  container: {
    position: 'sticky',
    top: 0,
    display: 'grid',
    alignContent: 'center',
    gridTemplateColumns: 'auto auto',
    width: '100%',
    height: '100px',
    backgroundColor: `${colors.white}`,
    borderBottom: `1px solid ${colors.silver}`,
    fontSize: '4vh',
    userSelect: 'none',
    cursor: 'default',
    zIndex: 1,
  },
  logo: {
    marginLeft: '2vw',
    color: `${colors.primary}`,
    fontWeight: '800',
  },
};
