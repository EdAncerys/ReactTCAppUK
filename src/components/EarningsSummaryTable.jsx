import React, { useContext } from 'react';
import { AppContext } from '../App';
import BoxContainer from './BoxContainer.jsx';

export default function EarningsSummaryTable({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const salary = manageAppContext.salary;

  return (
    <div style={styles.container}>
      <BoxContainer mouseHover="true">
        <div style={styles.tableHeader}>Tax Calculator for £ {salary}</div>

        <BoxContainer mouseHover="true">{salary} some some somee</BoxContainer>
        <BoxContainer mouseHover="true">{salary} some some somee</BoxContainer>
      </BoxContainer>
    </div>
  );
}

const styles = {
  container: {},
};
