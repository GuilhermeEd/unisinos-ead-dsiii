import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import DonateForm from '../forms/DonateForm';

const DonationModal = ({ project, onCancel }) => {
  return (
    <Modal title={!!project && project.name} visible={!!project} onCancel={onCancel} footer={null}>
      <DonateForm />
    </Modal>
  );
};

DonationModal.propTypes = {
  project: PropTypes.object,
  onCancel: PropTypes.func.isRequired
};

DonationModal.defaultProps = {
  project: null
};

export default DonationModal;
