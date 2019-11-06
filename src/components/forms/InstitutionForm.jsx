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
import SubmitButton from '../buttons/SubmitButton';
import UFInput from '../inputs/UFInput';

const MAX_FOUNDATION_DATE = moment().startOf('day');

const InstitutionForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" label="Email" component={EmailInput} />
      <Field name="password" label="Senha" component={PasswordInput} />
      <Field name="passwordConfirmation" label="Confirmar Senha" component={PasswordInput} />
      <Field name="name" label="Razão Social" component={TextInput} placeholder="Razão Social" />
      <Field name="cnpj" label="CNPJ" component={TextInput} placeholder="CNPJ (somente números)" />
      <Field
        name="foundation"
        label="Data de Fundação"
        component={DateInput}
        placeholder="Data de Fundação"
        disabledDate={date => date > MAX_FOUNDATION_DATE}
      />
      <Field name="uf" label="UF" component={UFInput} placeholder="UF" />
      <Field name="city" label="Cidade" component={TextInput} placeholder="Cidade" />
      <Field name="neighborhood" label="Bairro" component={TextInput} placeholder="Bairro" />
      <Field name="phone" label="Telefone" component={TextInput} placeholder="Telefone" />
      <Field name="website" label="Website" component={TextInput} placeholder="Website" />
      <Field name="bank" label="Banco" component={TextInput} placeholder="Banco" />
      <Field name="agency" label="Agência" component={TextInput} placeholder="Agência" />
      <Field
        name="account"
        label="Conta Corrente"
        component={TextInput}
        placeholder="Conta Corrente"
      />
      <SubmitButton />
    </Form>
  );
};

InstitutionForm.propTypes = {
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
  cnpj: yup
    .string()
    .length(14)
    .required(),
  foundation: yup
    .date()
    .max(MAX_FOUNDATION_DATE.toISOString())
    .required(),
  uf: yup
    .string()
    .length(2)
    .required(),
  city: yup.string().required(),
  neighborhood: yup.string().required(),
  phone: yup.string().required(),
  website: yup.string().required(),
  bank: yup.string().required(),
  agency: yup.string().required(),
  account: yup.string().required()
});

export default withFormik({
  validationSchema
})(InstitutionForm);
