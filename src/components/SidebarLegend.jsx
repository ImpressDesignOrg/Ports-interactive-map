import React from 'react';
import styled from 'styled-components';

export default function SidebarLegend({ icon, text }) {
  return (
    <StyledContainer>
      {icon}
      <p>{text}</p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 0 0 20px;
  }
`;
