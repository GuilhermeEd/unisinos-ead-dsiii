import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import withValidation from '../hocs/withValidation';

const UFs = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MG',
  'MS',
  'MT',
  'PA',
  'PB',
  'PE',
  'PI',
  'PR',
  'RJ',
  'RN',
  'RO',
  'RR',
  'RS',
  'SC',
  'SE',
  'SP',
  'TO'
];

const UFInput = ({ field, form, ...rest }) => {
  const handleSelect = value => {
    form.setFieldValue(field.name, value);
  };

  const options = UFs.map(UF => (
    <Select.Option key={UF} value={UF}>
      {UF}
    </Select.Option>
  ));

  return (
    <Select allowClear {...field} onSelect={handleSelect} {...rest}>
      {options}
    </Select>
  );
};

UFInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
};

export default withValidation(UFInput);
