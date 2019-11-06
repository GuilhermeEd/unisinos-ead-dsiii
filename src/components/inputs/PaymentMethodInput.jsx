import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

import withValidation from '../hocs/withValidation';

const paymentMethods = ['Boleto', 'Cartão de Crédito', 'Transferência Bancária'];

const PaymentMethodInput = ({ field, form, ...rest }) => {
  const options = paymentMethods.map(paymentMethod => (
    <Radio key={paymentMethod} value={paymentMethod}>
      {paymentMethod}
    </Radio>
  ));

  return (
    <Radio.Group {...field} {...rest}>
      {options}
    </Radio.Group>
  );
};

PaymentMethodInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
};

export default withValidation(PaymentMethodInput);
