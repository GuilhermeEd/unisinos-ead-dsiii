/* eslint no-template-curly-in-string: 0 */
import * as yup from 'yup';

yup.setLocale({
  mixed: {
    notType: 'Valor inválido',
    required: 'Campo é obrigatório'
  },
  string: {
    email: 'Email inválido',
    min: 'Campo deve ter ao menos ${min} caracteres'
  }
});

yup.addMethod(yup.string, 'equals', (ref, msg) => {
  return yup.mixed().test({
    name: 'equals',
    exclusive: false,
    message: msg || '${path} deve ser igual a ${reference}',
    params: {
      reference: ref.path
    },
    test(value) {
      return value === this.resolve(ref);
    }
  });
});

export default yup;
