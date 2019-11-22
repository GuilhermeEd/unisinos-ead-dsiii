import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

import withValidation from '../hocs/withValidation';

const paymentMethods = [
  { key: 1, label: 'Boleto' },
  { key: 2, label: 'Transferência Bancária' },
  { key: 3, label: 'Cartão de Crédito' }
];

const PaymentMethodInput = ({ field, form, ...rest }) => {
  const options = paymentMethods.map(paymentMethod => (
    <Radio key={paymentMethod.key} value={paymentMethod.key}>
      {paymentMethod.label}
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
