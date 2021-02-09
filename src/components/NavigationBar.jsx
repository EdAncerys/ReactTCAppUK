import React from 'react';
import TaxCalculatorLogo from '../img/TaxCalculatorLogo.png';

import colors from '../config/colors';

export default function NavigationBar({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <div style={styles.logoImg}></div>
        <div style={styles.logoText}>Tax Calculator</div>
      </div>
      <div>NavBar</div>
    </div>
  );
}

const styles = {
  container: {
    position: 'sticky',
    top: 0,
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    width: '100%',
    backgroundColor: 'rgba(247,247,247, 0.9)',
    color: `${colors.primary}`,
    borderBottom: `1px solid ${colors.silver}`,
    fontSize: '3vw',
    fontWeight: '800',
    padding: '5px',
    zIndex: 1,
  },
  logo: {
    display: 'grid',
    alignContent: 'center',
    gridTemplateColumns: 'auto auto',
    marginLeft: '2vw',
  },
  logoImg: {
    backgroundImage: `url(${TaxCalculatorLogo})`,
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '60px',
  },
  logoText: {
    display: 'grid',
    alignContent: 'center',
  },
};
