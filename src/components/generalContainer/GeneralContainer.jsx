import { Children } from 'react';
import { StyledGeneralContainer } from './generalContainer.styles';

const GeneralContainer = () => {
  return (
    <>
      <StyledGeneralContainer>{Children}</StyledGeneralContainer>
    </>
  );
};
export default GeneralContainer;
