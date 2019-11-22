import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import DonateForm from '../forms/DonateForm';

const DonateButton = ({ disabled, project }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { donationCreated } = useSelector(state => state.donations);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    if (donationCreated) {
      closeModal();
    }
  }, [donationCreated]);

  return (
    <>
      <Button block type="primary" onClick={toggleModal} disabled={disabled}>
        Doar
      </Button>
      <Modal
        title={!!project && project.name}
        visible={isModalVisible}
        onCancel={toggleModal}
        footer={null}
      >
        <DonateForm projeto={project} />
      </Modal>
    </>
  );
};

DonateButton.propTypes = {
  disabled: PropTypes.bool,
  project: PropTypes.object
};

DonateButton.defaultProps = {
  disabled: false,
  project: null
};

export default DonateButton;
