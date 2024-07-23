import React from 'react';
import styled from 'styled-components';

// Define a styled component for text
const StyledText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.color || '#000'};
  font-weight: ${(props) => props.weight || 'normal'};
  line-height: 1.5;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

const Text = ({ children, color, weight, margin, padding }) => {
  return (
    <StyledText color={color} weight={weight} margin={margin} padding={padding}>
      {children}
    </StyledText>
  );
};

export default Text;
