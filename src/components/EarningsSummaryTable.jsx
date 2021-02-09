import React, { useContext } from 'react';
import { AppContext } from '../App';
import BoxContainer from './BoxContainer.jsx';

import colors from '../config/colors';

export default function EarningsSummaryTable({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const salary = manageAppContext.salary;
  const salaryMonthly = salary / 365;

  const PERSONAL_ALLOWANCE_2019_2020 = 12500;
  const PERSONAL_ALLOWANCE_2018_2019 = 11850;
  const PERSONAL_ALLOWANCE_2017_2018 = 11500;
  const PERSONAL_ALLOWANCE_2016_2017 = 11000;
  const PERSONAL_ALLOWANCE_2015_2016 = 10600;
  const PERSONAL_ALLOWANCE_2014_2015 = 10000;
  const PERSONAL_ALLOWANCE_2013_2014 = 9440;
  const PERSONAL_ALLOWANCE_2012_2013 = 8105;
  const PERSONAL_ALLOWANCE_2011_2012 = 7475;
  const PERSONAL_ALLOWANCE_2010_2011 = 6475;
  const PERSONAL_ALLOWANCE_2009_2010 = 6475;

  let selectedYear = PERSONAL_ALLOWANCE_2019_2020;

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

        <BoxContainer mouseHover="true">
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Gross Income</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
          </div>
        </BoxContainer>
        <BoxContainer mouseHover="true">
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Personal Allowance</div>
            <div style={styles.tableCell}>{selectedYear}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
          </div>
        </BoxContainer>
        <BoxContainer mouseHover="true">
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Taxable Income</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
          </div>
        </BoxContainer>
        <BoxContainer mouseHover="true">
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Tax on 20%</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
          </div>
        </BoxContainer>
        <BoxContainer mouseHover="true">
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Tax on 40%</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
          </div>
        </BoxContainer>
        <BoxContainer mouseHover="true">
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Tax on 50%</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
          </div>
        </BoxContainer>
        <BoxContainer mouseHover="true">
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Income Tax Due</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
          </div>
        </BoxContainer>
        <BoxContainer mouseHover="true">
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>National Insurance Contribution</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
          </div>
        </BoxContainer>
        <BoxContainer mouseHover="true">
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Net Income</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
            <div style={styles.tableCell}>{salary}</div>
          </div>
        </BoxContainer>
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
    gridTemplateColumns: '25vw 10vw 10vw 10vw 10vw 10vw',
    gridGap: '1vw',
  },
  tableCell: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: '1.5vw',
    overflow: 'auto',
  },
  tableHeader: {
    margin: '2vw auto',
    padding: '20px auto',
    fontSize: `2.5vw`,
    textAlign: 'center',
  },
};
