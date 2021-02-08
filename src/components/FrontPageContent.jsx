import React, { useContext } from 'react';
import { AppContext } from '../App';
import BoxContainer from './BoxContainer.jsx';
import TaxForm from './TaxForm.jsx';

import colors from '../config/colors';

export default function FrontPageContent({ props }) {
  const { manageAppContext } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <div style={styles.mainHeader}>Calculate Your Taxes</div>
      <div>
        <BoxContainer mouseHover="true">
          <TaxForm />
        </BoxContainer>
      </div>
      <div style={styles.backgroundShape}></div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    width: '100%',
  },
  mainHeader: {
    display: 'grid',
    alignContent: 'center',
    margin: '1vh auto',
    padding: '20px auto',
    textAlign: 'center',
    fontSize: `6vw`,
    fontWeight: '800',
    color: `${colors.primary}`,
  },
  backgroundShape: {
    position: 'absolute',
    opacity: '0.4',
    backgroundColor: `${colors.silver}`,
    width: '100%',
    height: '100%',
    clipPath: `polygon(40% 10%, 90% 0%, 100% 10%, 100% 90%, 40% 100%, 0% 50%)`,
    zIndex: -1,
  },
};
