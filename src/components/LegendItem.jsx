import React from 'react';
import styled from 'styled-components';

export default function LegendItem({ title, iconSrc }) {
  return (
    <Container>
      <p>{title}</p>
      <img src={iconSrc} alt={title} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;

  border: 1px dotted red;

  p {
    margin: 0;
  }

  img {
    max-width: 20px;
  }
`;
