import React, { useContext } from 'react';
import { AppContext } from '../App';
import BoxContainer from './BoxContainer.jsx';

import colors from '../config/colors';

export default function EarningsSummaryTable({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const salary = manageAppContext.salary;

  return (
    <div style={styles.container}>
      <BoxContainer mouseHover="true">
        <div style={styles.tableHeader}>Tax Calculator for £ {salary}</div>

        <BoxContainer mouseHover="true" backgroundColor={`${colors.yellow}`}>
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Earnings Summary</div>
            <div style={styles.tableCell}>Yearly</div>
            <div style={styles.tableCell}>Monthly</div>
            <div style={styles.tableCell}>Weekly</div>
            <div style={styles.tableCell}>Daily</div>
            <div style={styles.tableCell}>Hourly</div>
          </div>
        </BoxContainer>

        <BoxContainer mouseHover="true">{salary} some some somee</BoxContainer>
        <BoxContainer mouseHover="true">{salary} some some somee</BoxContainer>
      </BoxContainer>
    </div>
  );
}

const styles = {
  container: {
    color: `${colors.primary}`,
  },
  tableRow: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    gridTemplateColumns: '3fr 1fr 1fr 1fr 1fr 1fr',
    gridGap: '1vw',
  },
  tableCell: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'auto',
  },
  tableHeader: {
    margin: '2vw auto',
    padding: '20px auto',
    fontSize: `2.5vw`,
    textAlign: 'center',
  },
};
