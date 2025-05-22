import styled from 'styled-components';
import { COLORS } from './../../styles/COLORS';
import { TYPOGRAPHY } from '../../styles/typography';

const StyledErrorMessage = styled.span`
  color: ${COLORS.red};
  font-size: 12px;
  max-width: 220px;
`;

const StyledFormContainer = styled.div`
  width: 343px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
  border-radius: 15px;

  @media (min-width: 768px) {
    width: 690px;
    margin-top: 20px;
  }
`;

const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 20px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    width: 90%;
  }
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

  @media (min-width: 768px) {
    width: 100%;
  }
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
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const StyledQuaryInput = styled.input`
  display: none;

  &:checked + label::before {
    background-color: ${COLORS.green600};
    border: 1px solid ${COLORS.green600};
  }
`;

const StyledQuaryLabel = styled.label`
  color: ${COLORS.gray900};
  font-size: ${TYPOGRAPHY.bodySMSize};
  font-weight: ${TYPOGRAPHY.bodySMWeightRegular};
  line-height: 15px;
  display: flex;
  gap: 8px;
  position: relative;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid ${COLORS.gray500};
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
    border: 1.5px solid ${COLORS.green600};
  }
`;

const StyledCheckboxInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const StyledCheckboxInput = styled.input`
  display: none;

  &:checked + label::before {
    background-color: ${COLORS.green600};
  }
`;

const StyledCheckboxLabel = styled.label`
  color: ${COLORS.gray900};
  font-size: ${TYPOGRAPHY.bodySMSize};
  font-weight: ${TYPOGRAPHY.bodySMWeightRegular};
  line-height: 15px;
  display: flex;
  gap: 8px;
  position: relative;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 2px;
    border: 2px solid ${COLORS.gray500};
  }
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
  StyledQuaryInput,
  StyledCheckboxInput,
  StyledCheckboxInputContainer,
  StyledErrorMessage,
  StyledRowContainer
};
