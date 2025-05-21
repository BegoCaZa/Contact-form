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
  StyledTitle
} from './form.styles';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  console.log(errors);
  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(data => console.log(data))}>
        <StyledTitle>Contact Us</StyledTitle>
        <StyledInputContainer>
          First Name *
          <StyledInput
            {...register('firstName', { required: 'This field is required' })}
            type='text'
          />
          <span>{errors.firstName?.message}</span>
        </StyledInputContainer>
        <StyledInputContainer>
          Last Name *
          <StyledInput
            {...register('lastName', { required: 'This field is required' })}
            type='text'
          />
          <span>{errors.lastName?.message}</span>
        </StyledInputContainer>
        <StyledInputContainer>
          Email Address *
          <StyledInput
            {...register('email', { required: 'Enter a valid email address' })}
            type='text'
          />
          <span>{errors.email?.message}</span>
        </StyledInputContainer>
        <StyledInputContainer>
          Query Type *
          <StyledQuaryContainer>
            <StyledQuaryInput id='generalQuary' type='checkbox' />
            <StyledQuaryLabel htmlFor='generalQuery'>
              General Query
            </StyledQuaryLabel>
          </StyledQuaryContainer>
          <StyledQuaryContainer>
            <StyledQuaryInput id='supportRequest' type='checkbox' />
            <StyledQuaryLabel htmlFor='supportRequest'>
              Support Request
            </StyledQuaryLabel>
          </StyledQuaryContainer>
        </StyledInputContainer>
        <StyledInputContainer>
          Message *
          <StyledTextarea />
        </StyledInputContainer>
        <StyledCheckboxLabel>
          <input type='checkbox' />I consent to being contacted by the team *
        </StyledCheckboxLabel>
        <StyledButton type='submit'>Submit</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};
export default Form;
