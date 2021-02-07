import React from 'react';

import colors from '../config/colors';

export default function TaxForm({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.mainHeader}>text</div>
      <div>
        <form style={styles.form}>
          <label style={styles.mainHeader}>
            Enter your salary and we'll calculate your tax for you
          </label>
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
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
  },
  form: {
    display: 'grid',
    alignContent: 'center',
  },
  mainHeader: {
    margin: '2vh auto',
    padding: '20px auto',
    fontSize: `2vw`,
    fontWeight: '800',
    color: `${colors.primary}`,
  },
};
