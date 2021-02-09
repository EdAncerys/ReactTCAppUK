import React, { useContext } from 'react';
import { AppContext } from '../App';
import Slider from '@material-ui/core/Slider';

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  },
];

function valuetext(value) {
  return `${value * 100}`;
}

export default function UISlider({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const salary = manageAppContext.salary;

  return (
    <div style={styles.container}>
      <Slider
        defaultValue={50}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        onChangeCommitted={(e, value) =>
          manageAppContext.setSalarySlider(
            Number((salary + salary * value * 0.01).toFixed(0))
          )
        }
      />
    </div>
  );
}

const styles = {
  container: {},
};
