import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, withFormik } from 'formik';
import { Spin, Form } from 'antd';
import moment from 'moment';

import { createUser, updateUser } from '../../store/users/actions';

import yup from '../../utils/yup';
import PasswordInput from '../inputs/PasswordInput';
import TextInput from '../inputs/TextInput';
import DateInput from '../inputs/DateInput';
import CEPInput from '../inputs/CEPInput';
import UFInput from '../inputs/UFInput';
import PaymentMethodInput from '../inputs/PaymentMethodInput';
import AdminPermission from '../permissions/AdminPermission';
import CheckboxInput from '../inputs/CheckboxInput';
import EmailInput from '../inputs/EmailInput';
import SubmitButton from '../buttons/SubmitButton';

import * as Styled from './styles/Form.styles';

const MAX_BIRTHDAY_DATE = moment().startOf('day');

const DonatorForm = ({ handleSubmit, loading, userCreated, resetForm }) => {
  useEffect(() => {
    if (userCreated) {
      resetForm();
    }
  }, [userCreated]);

  return (
    <Spin spinning={loading}>
      <Form onSubmit={handleSubmit}>
        <Styled.Group>
          <Styled.Item flex={1}>
            <Field name="nome" label="Nome" component={TextInput} placeholder="Nome" />
          </Styled.Item>
          <Styled.Item flex={1}>
            <Field name="email" label="Email" component={EmailInput} placeholder="Email" />
          </Styled.Item>
        </Styled.Group>
        <Styled.Group>
          <Styled.Item flex={1}>
            <Field name="senha" label="Senha" component={PasswordInput} />
          </Styled.Item>
          <Styled.Item flex={1}>
            <Field name="senhaConfirmation" label="Confirmar Senha" component={PasswordInput} />
          </Styled.Item>
        </Styled.Group>
        <Styled.Group>
          <Styled.Item flex={3}>
            <Field
              name="cpf_cnpj"
              label="CPF"
              component={TextInput}
              placeholder="CPF (somente números)"
            />
          </Styled.Item>
          <Styled.Item flex={2}>
            <Field
              name="data"
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
            <Field name="cidade" label="Cidade" component={TextInput} placeholder="Cidade" />
          </Styled.Item>
          <Styled.Item flex={3}>
            <Field name="bairro" label="Bairro" component={TextInput} placeholder="Bairro" />
          </Styled.Item>
        </Styled.Group>
        <Styled.Group>
          <Styled.Item flex={2}>
            <Field name="endereco" label="Endereço" component={TextInput} placeholder="Endereço" />
          </Styled.Item>
          <Styled.Item flex={1}>
            <Field name="telefone" label="Telefone" component={TextInput} placeholder="Telefone" />
          </Styled.Item>
        </Styled.Group>
        <Styled.Group>
          <Styled.Item flex={1}>
            <Field
              name="pref_doacao"
              label="Preferência para doação"
              component={PaymentMethodInput}
              placeholder="Preferência para doação"
            />
          </Styled.Item>
        </Styled.Group>
        <AdminPermission>
          <Styled.Group>
            <Styled.Item>
              <Field hideLabel name="ativo" label="Ativo" component={CheckboxInput} />
            </Styled.Item>
          </Styled.Group>
        </AdminPermission>
        <SubmitButton />
      </Form>
    </Spin>
  );
};

DonatorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userCreated: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

DonatorForm.defaultProps = {
  loading: false
};

const validationSchema = yup.object().shape({
  nome: yup
    .string()
    .min(3)
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  senha: yup
    .string()
    .min(6)
    .required(),
  senhaConfirmation: yup
    .string()
    .min(6)
    .equals(yup.ref('senha'), 'Senhas não conferem')
    .required(),
  cpf_cnpj: yup
    .string()
    .length(11)
    .required(),
  data: yup
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
  cidade: yup.string().required(),
  bairro: yup.string().required(),
  endereco: yup.string().required(),
  telefone: yup.string().required(),
  pref_doacao: yup.number().required(),
  ativo: yup.number()
});

const mapPropsToValues = props => {
  return props.initialValues || {};
};

const handleSubmit = (values, formikBag) => {
  const payload = { ...values };
  payload.ativo = payload.ativo === undefined ? 1 : payload.ativo;
  payload.tipo = 'D';
  if (formikBag.props.isEdit) {
    formikBag.props.updateUser(payload);
  } else {
    formikBag.props.createUser(payload);
  }
};

const mapStateToProps = ({ users }) => ({
  loading: users.loading,
  userCreated: users.userCreated
});

const enhance = compose(
  connect(
    mapStateToProps,
    { createUser, updateUser }
  ),
  withFormik({
    enableReinitialize: true,
    validationSchema,
    mapPropsToValues,
    handleSubmit
  })
);

export default enhance(DonatorForm);
