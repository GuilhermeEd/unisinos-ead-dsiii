import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, withFormik } from 'formik';
import { Form } from 'antd';
import moment from 'moment';

import { createProject } from '../../store/projects/actions';

import yup from '../../utils/yup';

import TextInput from '../inputs/TextInput';
import MoneyInput from '../inputs/MoneyInput';
import DateInput from '../inputs/DateInput';
import CheckboxInput from '../inputs/CheckboxInput';
import DescriptionInput from '../inputs/DescriptionInput';
import SubmitButton from '../buttons/SubmitButton';

import * as Styled from './styles/Form.styles';

const MIN_DATE = moment().endOf('day');

const ProjectForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Styled.Group>
        <Styled.Item flex={3}>
          <Field name="nome" label="Nome" component={TextInput} />
        </Styled.Item>
        <Styled.Item flex={1}>
          <Field name="objetivo_arrecadacao" label="Objetivo" component={MoneyInput} />
        </Styled.Item>
      </Styled.Group>
      <Styled.Group>
        <Styled.Item flex={1}>
          <Field
            name="data_inicio"
            label="Data de Início"
            component={DateInput}
            placeholder="Data de Início"
            disabledDate={date => date < MIN_DATE}
          />
        </Styled.Item>
        <Styled.Item flex={1}>
          <Field
            name="data_fim"
            label="Data Fim"
            component={DateInput}
            placeholder="Data Fim"
            disabledDate={date => date < MIN_DATE}
          />
        </Styled.Item>
        <Styled.Item flex={3}>
          <Field name="URL" label="Website" component={TextInput} placeholder="Website" />
        </Styled.Item>
      </Styled.Group>
      <Field
        hideLabel
        name="encerrar_projeto_objetivo"
        label="Encerrar projeto ao atingir o objetivo de arrecadação"
        component={CheckboxInput}
      />
      <Field name="descricao" label="Descrição" component={DescriptionInput} />
      <SubmitButton />
    </Form>
  );
};

ProjectForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const validationSchema = yup.object().shape({
  nome: yup
    .string()
    .min(3)
    .required(),
  objetivo_arrecadacao: yup
    .number()
    .min(1)
    .required(),
  data_inicio: yup
    .date()
    .min(MIN_DATE.toISOString())
    .required(),
  data_fim: yup.date().min(MIN_DATE.toISOString()),
  URL: yup.string().required(),
  encerrar_projeto_objetivo: yup.bool(),
  descricao: yup.string()
});

const handleSubmit = (values, formikBag) => {
  const payload = { ...values };
  payload.codigo = 1;
  payload.codigo_usuario = 1;
  formikBag.props.createProject(payload);
};

const enhance = compose(
  connect(
    null,
    { createProject }
  ),
  withFormik({
    validationSchema,
    handleSubmit
  })
);

export default enhance(ProjectForm);
