import React, { useState } from 'react';

import colors from '../config/colors';

export default function BoxContainer({
  children,
  height,
  backgroundColor,
  mouseHover,
}) {
  const [hover, setHover] = useState(false);

  const boxShadow =
    hover && mouseHover === 'true'
      ? false
      : `5px 10px 18px 0px rgba(0, 0, 0, 0.1)`;

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        margin: `4px 0`,
        padding: `10px`,
        backgroundColor: `${backgroundColor}`,
        border: `1px solid ${colors.silver}`,
        borderRadius: `8px`,
        boxShadow: boxShadow,
        transition: `all 250ms ease-in-out`,
        height: `${height}`,
        overflow: 'auto',
      }}
      onPointerEnter={() => setHover(!hover)}
      onPointerLeave={() => setHover(!hover)}
    >
      {children}
    </div>
  );
}
