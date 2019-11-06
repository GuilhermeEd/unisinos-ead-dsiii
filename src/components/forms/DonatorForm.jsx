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

import * as Styled from './styles/Form.styles';

const MAX_BIRTHDAY_DATE = moment().startOf('day');

const DonatorForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" label="Email" component={EmailInput} />
      <Styled.Group>
        <Styled.Item flex={1}>
          <Field name="password" label="Senha" component={PasswordInput} />
        </Styled.Item>
        <Styled.Item flex={1}>
          <Field name="passwordConfirmation" label="Confirmar Senha" component={PasswordInput} />
        </Styled.Item>
      </Styled.Group>
      <Styled.Group>
        <Styled.Item flex={5}>
          <Field name="name" label="Nome" component={TextInput} placeholder="Nome" />
        </Styled.Item>
        <Styled.Item flex={3}>
          <Field name="cpf" label="CPF" component={TextInput} placeholder="CPF (somente números)" />
        </Styled.Item>
        <Styled.Item flex={2}>
          <Field
            name="birthday"
            label="Data de Nascimento"
            component={DateInput}
            placeholder="Data de Nascimento"
            disabledDate={date => date > MAX_BIRTHDAY_DATE}
          />
        </Styled.Item>
      </Styled.Group>
      <Styled.Group>
        <Styled.Item flex={3}>
          <Field name="cep" label="CEP" component={CEPInput} placeholder="CEP" />
        </Styled.Item>
        <Styled.Item flex={1}>
          <Field name="uf" label="UF" component={UFInput} placeholder="UF" />
        </Styled.Item>
        <Styled.Item flex={4}>
          <Field name="city" label="Cidade" component={TextInput} placeholder="Cidade" />
        </Styled.Item>
        <Styled.Item flex={3}>
          <Field name="neighborhood" label="Bairro" component={TextInput} placeholder="Bairro" />
        </Styled.Item>
      </Styled.Group>
      <Styled.Group>
        <Styled.Item>
          <Field name="phone" label="Telefone" component={TextInput} placeholder="Telefone" />
        </Styled.Item>
        <Styled.Item flex={1}>
          <Field
            name="paymentMethod"
            label="Preferência para doação"
            component={PaymentMethodInput}
            placeholder="Preferência para doação"
          />
        </Styled.Item>
      </Styled.Group>
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
