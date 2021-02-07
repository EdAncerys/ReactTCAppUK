import React from 'react';

import colors from '../config/colors';

export default function FrontPageContent({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.content}>hello</div>
      <div style={styles.shape}>hello</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    paddingTop: '1vh',
  },
  shape: {
    position: 'absolute',
    opacity: '0.4',
    backgroundColor: `${colors.silver}`,
    width: '100%',
    height: '100%',
    clipPath: `polygon(40% 10%, 90% 0%, 100% 10%, 100% 90%, 40% 100%, 0% 50%)`,
    zIndex: -1,
  },
};
