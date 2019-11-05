import React from 'react';
import PropTypes from 'prop-types';
import { Field, withFormik } from 'formik';
import { Form } from 'antd';

import yup from '../../utils/yup';
import TextInput from '../inputs/TextInput';
import MoneyInput from '../inputs/MoneyInput';
import DescriptionInput from '../inputs/DescriptionInput';
import SubmitButton from '../buttons/SubmitButton';

const ProjectForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="name" label="Nome" component={TextInput} />
      <Field name="objective" label="Objetivo" component={MoneyInput} />
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
  description: yup.string()
});

export default withFormik({
  validationSchema
})(ProjectForm);
