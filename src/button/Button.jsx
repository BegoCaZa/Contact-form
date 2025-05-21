import { StyledButton } from './button.styles';

const Button = ({ color, hoverColor }) => {
  return (
    <StyledButton color={color} hoverColor={hoverColor}>
      CLICK ME
    </StyledButton>
  );
};

export default Button;
