import React, { useState } from 'react';

import colors from '../config/colors';

export default function Button({ title = 'Title', onClick }) {
  const [hover, setHover] = useState(false);

  const btnTextColor = hover ? colors.primary : colors.white;
  const btnBackgroundColor = hover ? colors.secondary : colors.primary;

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: btnTextColor,
        backgroundColor: btnBackgroundColor,
        borderRadius: 20,
        fontWeight: 500,
        fontSize: 24,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        margin: '10px 0px',
        cursor: 'pointer',
      }}
      onClick={onClick}
      onPointerEnter={() => setHover(!hover)}
      onPointerLeave={() => setHover(!hover)}
    >
      {title}
    </div>
  );
}
