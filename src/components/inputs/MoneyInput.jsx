import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from 'antd';

import withValidation from '../hocs/withValidation';

const MoneyInput = ({ form, field }) => {
  const handleChange = value => {
    form.setFieldValue(field.name, value);
  };

  return (
    <InputNumber
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      style={{ width: '100%' }}
      defaultValue={0}
      min={0}
      step={1000}
      {...field}
      onChange={handleChange}
    />
  );
};

MoneyInput.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired
};

export default withValidation(MoneyInput);
