import { ValuesHandlerError } from '../interfaces/ValueHandlerError.interface';

export const valuesHandlerError: ValuesHandlerError = {
  email: {
    errorMessage: 'El texto ingresado, no es un correo valido.',
  },
  password: {
    errorMessage: 'Este campo es requerido.',
  },
  text: {
    errorMessage: 'Este campo es requerido',
  }
};

export const valuesWithPatternHandlerError: ValuesHandlerError = {
  email: {
    errorMessage: 'El texto ingresado, no es un correo valido.',
    pattern: "[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+$",
  },
  password: {
    errorMessage: 'La contraseña ingresada no cumple con los requerimientos.',
    pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
  },
  text: {
    errorMessage: 'Este campo es requerido',
    pattern: '',
  }
};
