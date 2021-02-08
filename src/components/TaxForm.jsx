import React, { useContext } from 'react';
import { AppContext } from '../App';
import Button from './Button.jsx';

import colors from '../config/colors';

export default function TaxForm({ props }) {
  const { manageAppContext } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.mainHeader}>
          Easy way of calculating your tax and National Insurance rates!
        </div>
        <div style={styles.text}>
          Our Tax Calculator estimate how much Income Tax and National Insurance
          (NI) you should pay for the current tax year. We make it easy to
          estimate how much Tax and National Insurance will be taken from your
          salary per week, month or per year.
          <div>
            This tells you your take-home pay if you do not have any other
            deductions, such as pension contributions or student loans.
          </div>
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
            placeholder="For example 18000"
            style={styles.inputField}
            onKeyDown={(event) => {
              event.key === 'e' && event.preventDefault();
            }}
          />
          <Button
            title="Calculate"
            onClick={() => manageAppContext.setSalary(!manageAppContext.salary)}
          />
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
    gridGap: '3vw',
    color: `${colors.primary}`,
    fontWeight: '800',
  },
  form: {
    display: 'grid',
    alignContent: 'center',
  },
  mainHeader: {
    margin: '2vw auto',
    padding: '20px auto',
    fontSize: `2.5vw`,
    textAlign: 'center',
  },
  inputField: {
    color: `${colors.primary}`,
    fontSize: '2vw',
    fontWeight: '800',
    backgroundColor: 'transparent',
    padding: `10px`,
    border: `1px solid ${colors.yellow}`,
    borderRadius: '8px',
  },
  text: {
    padding: '20px auto',
    fontSize: `1.5vw`,
    textAlign: 'justify',
  },
};
