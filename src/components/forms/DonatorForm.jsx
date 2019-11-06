import React from 'react';
import PropTypes from 'prop-types';
import { Field, withFormik } from 'formik';
import { Form } from 'antd';
import moment from 'moment';

import yup from '../../utils/yup';
import EmailInput from '../inputs/EmailInput';
import PasswordInput from '../inputs/PasswordInput';
import TextInput from '../inputs/TextInput';
import DateInput from '../inputs/DateInput';
import CEPInput from '../inputs/CEPInput';
import UFInput from '../inputs/UFInput';
import PaymentMethodInput from '../inputs/PaymentMethodInput';
import SubmitButton from '../buttons/SubmitButton';

const MAX_BIRTHDAY_DATE = moment().startOf('day');

const DonatorForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" label="Email" component={EmailInput} />
      <Field name="password" label="Senha" component={PasswordInput} />
      <Field name="passwordConfirmation" label="Confirmar Senha" component={PasswordInput} />
      <Field name="name" label="Nome" component={TextInput} placeholder="Nome" />
      <Field name="cpf" label="CPF" component={TextInput} placeholder="CPF (somente números)" />
      <Field
        name="birthday"
        label="Data de Nascimento"
        component={DateInput}
        placeholder="Data de Nascimento"
        disabledDate={date => date > MAX_BIRTHDAY_DATE}
      />
      <Field name="cep" label="CEP" component={CEPInput} placeholder="CEP" />
      <Field name="uf" label="UF" component={UFInput} placeholder="UF" />
      <Field name="city" label="Cidade" component={TextInput} placeholder="Cidade" />
      <Field name="neighborhood" label="Bairro" component={TextInput} placeholder="Bairro" />
      <Field name="phone" label="Telefone" component={TextInput} placeholder="Telefone" />
      <Field
        name="paymentMethod"
        label="Preferência para doação"
        component={PaymentMethodInput}
        placeholder="Preferência para doação"
      />
      <Field name="website" label="Website" component={TextInput} placeholder="Website" />
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
    .length(12)
    .required(),
  birthday: yup
    .date()
    .max(MAX_BIRTHDAY_DATE.toISOString())
    .required(),
  cep: yup
    .string()
    .length(8)
    .required(),
  uf: yup
    .string()
    .length(2)
    .required(),
  city: yup.string().required(),
  neighborhood: yup.string().required(),
  phone: yup.string().required(),
  paymentMethod: yup.string().required()
});

export default withFormik({
  validationSchema
})(DonatorForm);
