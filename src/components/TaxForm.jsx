import React from 'react';
import Button from './Button.jsx';

import colors from '../config/colors';

export default function TaxForm({ props }) {
  return (
    <div style={styles.container}>
      <div>
        <div style={styles.mainHeader}>
          Easy way of calculating your tax rates!
        </div>
        <div style={styles.text}>
          Your Tax Calculator calculates how much Income Tax and National
          Insurance (NI) will be taken from your salary per week, per month and
          per year.
          <div>
            Enter your salary to view tax deductions and take home pay, figure
            out exactly how much money you're left with at the end of the month.
          </div>
        </div>
      </div>
      <div>
        <form style={styles.form}>
          <label style={styles.mainHeader}>
            Enter your salary, and we'll calculate your tax for you!
          </label>
          <input
            type="number"
            name="name"
            placeholder="For example 18 000"
            style={styles.inputField}
          />
          <Button title="Calculate" />
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    gridTemplateColumns: '1fr 1fr',
    height: '40vw',
    gridGap: '3vw',
    color: `${colors.primary}`,
    fontWeight: '800',
  },
  form: {
    display: 'grid',
    alignContent: 'center',
  },
  mainHeader: {
    margin: '2vh auto',
    padding: '20px auto',
    fontSize: `3vw`,
    textAlign: 'center',
  },
  inputField: {
    backgroundColor: 'transparent',
    padding: `10px`,
    border: `1px solid ${colors.yellow}`,
    borderRadius: '8px',
  },
  text: {
    padding: '20px auto',
    fontSize: `2vw`,
    textAlign: 'justify',
  },
};
