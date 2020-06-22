import React from 'react';
import styled from 'styled-components';

export default function LegendItem({ title, icon, iconSrc, dotColor }) {
  // order of priority:
  // 1) icon
  // 2) iconSrc
  // 3) dotColor

  const KEY_MARKUP = () => {
    if (icon) return icon;
    else if (iconSrc) return <img src={iconSrc} alt={title} />;
    else if (dotColor) return <LegendDot color={dotColor} />;
  };

  return (
    <Container>
      <p>{title}</p>
      {KEY_MARKUP()}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;

  p {
    margin: 0;
  }

  img {
    max-width: 20px;
  }
`;

const LegendDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
