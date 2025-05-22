import { FORM_VALIDATIONS } from '../../constants/form-validations';
import {
  StyledFormContainer,
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledTextarea,
  StyledQuaryContainer,
  StyledQuaryLabel,
  StyledQuaryInput,
  StyledCheckboxLabel,
  StyledButton,
  StyledTitle,
  StyledCheckboxInput,
  StyledCheckboxInputContainer,
  StyledErrorMessage,
  StyledRowContainer
} from './form.styles';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onBlur' });

  console.log(errors);
  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(data => console.log(data))}>
        <StyledTitle>Contact Us</StyledTitle>
        <StyledRowContainer>
          <StyledInputContainer>
            First Name *
            <StyledInput
              {...register('firstName', FORM_VALIDATIONS.NAME)}
              type='text'
            />
            <StyledErrorMessage>{errors.firstName?.message}</StyledErrorMessage>
          </StyledInputContainer>
          <StyledInputContainer>
            Last Name *
            <StyledInput
              {...register('lastName', FORM_VALIDATIONS.LASTNAME)}
              type='text'
            />
            <StyledErrorMessage>{errors.lastName?.message}</StyledErrorMessage>
          </StyledInputContainer>
        </StyledRowContainer>
        <StyledInputContainer>
          Email Address *
          <StyledInput
            {...register('email', FORM_VALIDATIONS.EMAIL)}
            type='text'
          />
          <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
        </StyledInputContainer>

        <StyledInputContainer>
          Query Type *
          <StyledRowContainer>
            <StyledQuaryContainer>
              <StyledQuaryInput
                {...register('query', FORM_VALIDATIONS.QUERY)}
                id='generalQuery'
                type='radio'
              />
              <StyledQuaryLabel htmlFor='generalQuery'>
                General Query
              </StyledQuaryLabel>
            </StyledQuaryContainer>

            <StyledQuaryContainer>
              <StyledQuaryInput
                {...register('query', FORM_VALIDATIONS.QUERY)}
                id='supportRequest'
                type='radio'
              />
              <StyledQuaryLabel htmlFor='supportRequest'>
                Support Request
              </StyledQuaryLabel>
            </StyledQuaryContainer>
          </StyledRowContainer>
          <StyledErrorMessage>{errors?.query?.message}</StyledErrorMessage>
        </StyledInputContainer>

        <StyledInputContainer>
          Message *
          <StyledTextarea
            type='textarea'
            {...register('message', FORM_VALIDATIONS.MESSAGE)}
            id='text'
          />
          <StyledErrorMessage>{errors?.message?.message}</StyledErrorMessage>
        </StyledInputContainer>

        <StyledCheckboxInputContainer>
          <StyledCheckboxInput
            type='checkbox'
            {...register('consent', FORM_VALIDATIONS.CONSENT)}
            id='consentCheckbox'
          />
          <StyledCheckboxLabel htmlFor='consentCheckbox'>
            I consent to being contacted
          </StyledCheckboxLabel>
        </StyledCheckboxInputContainer>
        <StyledErrorMessage>{errors?.consent?.message}</StyledErrorMessage>

        <StyledButton type='submit'>Submit</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};
export default Form;
