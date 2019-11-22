import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, withFormik } from 'formik';
import { Form } from 'antd';

import { createDonation } from '../../store/donations/actions';

import yup from '../../utils/yup';
import PaymentMethodInput from '../inputs/PaymentMethodInput';
import MoneyInput from '../inputs/MoneyInput';
import SubmitButton from '../buttons/SubmitButton';

const DonateForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="metodo_doacao"
        label="Preferência para doação"
        component={PaymentMethodInput}
        placeholder="Preferência para doação"
      />
      <Field name="valor" label="Valor" component={MoneyInput} />
      <SubmitButton />
    </Form>
  );
};

DonateForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = ({ projects }) => ({
  projectCreated: projects.projectCreated,
  projectUpdated: projects.projectUpdated
});

const validationSchema = yup.object().shape({
  metodo_doacao: yup.string().required(),
  valor: yup
    .number()
    .min(1)
    .required()
});

const handleSubmit = (values, formikBag) => {
  const payload = { ...values };
  payload.codigo_projeto = formikBag.props.projeto;
  formikBag.props.createDonation(payload);
};

const enhance = compose(
  connect(
    mapStateToProps,
    { createDonation }
  ),
  withFormik({
    validationSchema,
    handleSubmit
  })
);

export default enhance(DonateForm);
