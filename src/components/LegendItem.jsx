import React from 'react';
import styled from 'styled-components';

export default function LegendItem({ title, iconSrc, dotColor }) {
  return (
    <Container>
      <p>{title}</p>
      {iconSrc ? (
        <img src={iconSrc} alt={title} />
      ) : (
        <LegendDot color={dotColor} />
      )}
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
