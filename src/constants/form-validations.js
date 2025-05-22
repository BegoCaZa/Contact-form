// mensajes de error y validacion para mejor navegacion
const messages = {
  text: {
    required: 'This field is required',
    wrong: 'Only letters and spaces'
  },
  email: {
    required: 'This field is required',
    wrong: 'Enter a valid email'
  },
  query: {
    required: 'Select at least one quary type'
  },
  consent: {
    required: 'To submit this form, please consent to being contacted'
  }
};

const patterns = {
  onlyLetters: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
};

const textValidation = {
  required: messages.text.required,
  patterns: {
    value: patterns.onlyLetters,
    message: messages.text.wrong
  }
};

const emailValidation = {
  required: messages.text.required,
  patterns: {
    value: patterns.email,
    message: messages.email.wrong
  }
};

const queryValidation = {
  required: messages.query.required
};

const consentValidation = {
  required: messages.consent.required
};

export const FORM_VALIDATIONS = {
  NAME: textValidation,
  LASTNAME: textValidation,
  EMAIL: emailValidation,
  QUERY: queryValidation,
  CONSENT: consentValidation
};
