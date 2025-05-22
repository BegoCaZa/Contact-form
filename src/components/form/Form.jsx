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
  StyledTitle
} from './form.styles';
import { useForm, useWatch } from 'react-hook-form';

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onBlur' });

  // son necesarios para validar el check
  const generalQuary = useWatch({ control, name: 'generalQuary' });
  const supportRequest = useWatch({ control, name: 'supportRequest' });

  console.log(errors);
  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(data => console.log(data))}>
        <StyledTitle>Contact Us</StyledTitle>
        <StyledInputContainer>
          First Name *
          <StyledInput
            {...register('firstName', FORM_VALIDATIONS.NAME)}
            type='text'
          />
          <span style={{ color: 'red', fontSize: '12px' }}>
            {errors.firstName?.message}
          </span>
        </StyledInputContainer>
        <StyledInputContainer>
          Last Name *
          <StyledInput
            {...register(
              'lastName',
              { required: 'This field is required' },
              {
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message: 'Invalid last name'
                }
              }
            )}
            type='text'
          />
          <span style={{ color: 'red', fontSize: '12px' }}>
            {errors.lastName?.message}
          </span>
        </StyledInputContainer>
        <StyledInputContainer>
          Email Address *
          <StyledInput
            {...register(
              'email',
              { required: 'Enter a valid email address' },
              {
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              }
            )}
            type='text'
          />
          <span style={{ color: 'red', fontSize: '12px' }}>
            {errors.email?.message}
          </span>
        </StyledInputContainer>
        <StyledInputContainer>
          Query Type *
          <StyledQuaryContainer>
            <StyledQuaryInput
              {...register('generalQuery')}
              id='generalQuery'
              type='checkbox'
            />
            <StyledQuaryLabel htmlFor='generalQuery'>
              General Query
            </StyledQuaryLabel>
          </StyledQuaryContainer>
          <StyledQuaryContainer>
            <StyledQuaryInput
              {...register('supportRequest')}
              id='supportRequest'
              type='checkbox'
            />
            <StyledQuaryLabel htmlFor='supportRequest'>
              Support Request
            </StyledQuaryLabel>
          </StyledQuaryContainer>
          {/* validar */}
          <input
            type='hidden'
            {...register('queryType', {
              validate: () =>
                generalQuary || supportRequest || 'Please select a query type'
            })}
          />
          {errors.queryType && (
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.queryType.message}
            </span>
          )}
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
