import styled from 'styled-components';
import { COLORS } from './../../styles/COLORS';
import { TYPOGRAPHY } from '../../styles/typography';

const StyledFormContainer = styled.div`
  width: 343px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
  padding: 10px 20px;
  border-radius: 15px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTitle = styled.h2`
  margin-bottom: 16px;
  color: ${COLORS.gray900};
  font-size: ${TYPOGRAPHY.headingSize};
  font-weight: ${TYPOGRAPHY.headingWeight};
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.gray900};
  font-size: ${TYPOGRAPHY.bodySMSize};
  font-weight: ${TYPOGRAPHY.bodySMWeightRegular};
  gap: 8px;
`;

const StyledInput = styled.input`
  border: 1px solid ${COLORS.gray500};
  border-radius: 6px;
  padding: 12px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border: 1.5px solid ${COLORS.green600};
  }
`;

const StyledQuaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
  border: 1px solid ${COLORS.gray500};
  border-radius: 6px;
  padding: 12px;
`;

const StyledQuaryInput = styled.input``;

const StyledQuaryLabel = styled.label`
  color: ${COLORS.gray900};
  font-size: ${TYPOGRAPHY.bodySMSize};
  font-weight: ${TYPOGRAPHY.bodySMWeightRegular};
  display: flex;
  gap: 8px;
  position: relative;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${COLORS.gray500};
  }
  & ${StyledQuaryInput}:checked + label {
    background-color: ${COLORS.green200};
    border: 1px solid ${COLORS.green600};
  }
  & ${StyledQuaryInput}:checked + label::before {
    background-color: ${COLORS.green600};
    border: 1px solid ${COLORS.green600};
  }
`;

const StyledTextarea = styled.textarea`
  border: 1px solid ${COLORS.gray500};
  border-radius: 6px;
  padding: 12px;
  font-size: ${TYPOGRAPHY.bodySMSize};
  min-height: 120px;
  outline: none;
  &:focus {
    border-color: #178a78;
  }
`;

const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 1rem;
  color: #2d3a3a;
`;

const StyledButton = styled.button`
  background: ${COLORS.green600};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  font-size: ${TYPOGRAPHY.bodyMDSize};
  font-weight: ${TYPOGRAPHY.bodyMDWeightBold};
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background: ${COLORS.green200};
  }
`;
export {
  StyledFormContainer,
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledTextarea,
  StyledQuaryContainer,
  StyledQuaryLabel,
  StyledCheckboxLabel,
  StyledButton,
  StyledTitle,
  StyledQuaryInput
};
