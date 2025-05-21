import styled from 'styled-components';
const StyledButton = styled.button`
  padding: 1rem;
  background-color: ${({ color }) => color};
  border-radius: 0.5rem;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ hoverColor }) => hoverColor};
    }
  }
`;

export { StyledButton };
