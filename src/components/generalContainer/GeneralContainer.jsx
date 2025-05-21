import { StyledGeneralContainer } from './generalContainer.styles';

const GeneralContainer = ({ children }) => {
  return (
    <>
      <StyledGeneralContainer>{children}</StyledGeneralContainer>
    </>
  );
};
export default GeneralContainer;
