import React from 'react';
import PropTypes from 'prop-types';
import { Field, withFormik } from 'formik';
import { Form } from 'antd';

import yup from '../../utils/yup';
import EmailInput from '../inputs/EmailInput';
import PasswordInput from '../inputs/PasswordInput';
import TextInput from '../inputs/TextInput';
import SubmitButton from '../buttons/SubmitButton';

const DonatorForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" label="Email" component={EmailInput} />
      <Field name="password" label="Senha" component={PasswordInput} />
      <Field name="passwordConfirmation" label="Confirmar Senha" component={PasswordInput} />
      <Field name="name" label="Nome" component={TextInput} />
      <Field name="cpf" label="CPF" component={TextInput} />
      <SubmitButton />
    </Form>
  );
};

DonatorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required(),
  passwordConfirmation: yup
    .string()
    .min(6)
    .equals(yup.ref('password'), 'Senhas não conferem')
    .required(),
  name: yup
    .string()
    .min(3)
    .required(),
  cpf: yup
    .string()
    .min(12)
    .max(12)
    .required()
});

export default withFormik({
  validationSchema
})(DonatorForm);
