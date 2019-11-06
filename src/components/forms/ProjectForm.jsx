import React from 'react';
import PropTypes from 'prop-types';
import { Field, withFormik } from 'formik';
import { Form } from 'antd';
import moment from 'moment';

import yup from '../../utils/yup';
import TextInput from '../inputs/TextInput';
import MoneyInput from '../inputs/MoneyInput';
import DateInput from '../inputs/DateInput';
import CheckboxInput from '../inputs/CheckboxInput';
import DescriptionInput from '../inputs/DescriptionInput';
import SubmitButton from '../buttons/SubmitButton';

const MIN_DATE = moment().endOf('day');

const ProjectForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="name" label="Nome" component={TextInput} />
      <Field name="objective" label="Objetivo" component={MoneyInput} />
      <Field
        name="dt_start"
        label="Data de Início"
        component={DateInput}
        placeholder="Data de Início"
        disabledDate={date => date < MIN_DATE}
      />
      <Field
        name="dt_end"
        label="Data Fim"
        component={DateInput}
        placeholder="Data Fim"
        disabledDate={date => date < MIN_DATE}
      />
      <Field
        hideLabel
        name="endOnObjective"
        label="Encerrar projeto ao atingir o objetivo de arrecadação"
        component={CheckboxInput}
      />
      <Field name="description" label="Descrição" component={DescriptionInput} />
      <SubmitButton />
    </Form>
  );
};

ProjectForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .required(),
  objective: yup
    .number()
    .min(1)
    .required(),
  dt_start: yup
    .date()
    .min(MIN_DATE.toISOString())
    .required(),
  dt_end: yup
    .date()
    .min(MIN_DATE.toISOString())
    .required(),
  website: yup.string().required(),
  endOnObjective: yup.bool(),
  description: yup.string()
});

export default withFormik({
  validationSchema
})(ProjectForm);
