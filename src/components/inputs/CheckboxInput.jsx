import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

import withValidation from '../hocs/withValidation';

const CheckboxInput = ({ field, form, label }) => {
  const handleChange = e => {
    const { checked } = e.target;
    form.setFieldValue(field.name, checked ? 1 : 0);
  };

  return (
    <Checkbox {...field} checked={field.value} onChange={handleChange}>
      {label}
    </Checkbox>
  );
};

CheckboxInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default withValidation(CheckboxInput);
