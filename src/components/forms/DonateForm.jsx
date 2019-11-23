import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, withFormik } from 'formik';
import { Spin, Form } from 'antd';

import { createDonation } from '../../store/donations/actions';

import yup from '../../utils/yup';
import PaymentMethodInput from '../inputs/PaymentMethodInput';
import MoneyInput from '../inputs/MoneyInput';
import SubmitButton from '../buttons/SubmitButton';

const DonateForm = ({ handleSubmit, loading, resetForm, donationCreated }) => {
  useEffect(() => {
    if (donationCreated) {
      resetForm();
    }
  }, [donationCreated]);

  return (
    <Spin spinning={loading}>
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
    </Spin>
  );
};

DonateForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  donationCreated: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired
};

const mapStateToProps = ({ donations }) => ({
  loading: donations.loading,
  donationCreated: donations.donationCreated
});

const validationSchema = yup.object().shape({
  metodo_doacao: yup.number().required(),
  valor: yup
    .number()
    .min(1)
    .required()
});

const handleSubmit = (values, formikBag) => {
  const payload = {
    valor: values.valor,
    metodo_doacao: values.metodo_doacao,
    codigo_projeto: formikBag.props.projeto.codigo_projeto
  };
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
