import React from 'react';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function UISlider({ props }) {
  return (
    <div style={styles.container}>
      <Slider
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

const styles = {
  container: {},
};
