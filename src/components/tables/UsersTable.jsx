import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Modal } from 'antd';

import { fetchUsers, fetchUser } from '../../store/users/actions';
import ActionList from '../lists/ActionList';
import DonatorForm from '../forms/DonatorForm';
import InstitutionForm from '../forms/InstitutionForm';

const UsersTable = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { user, users, loading, userUpdated } = useSelector(state => state.users);
  const dispatch = useDispatch();

  const openEditModal = record => {
    if (record) {
      dispatch(fetchUser(record.codigo));
    }

    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    if (userUpdated) {
      closeEditModal();
    }
  }, [userUpdated]);

  const renderActions = (text, record) => <ActionList onEdit={() => openEditModal(record)} />;

  const columns = [
    {
      title: 'Nome / Razão Social',
      dataIndex: 'nome',
      key: 'nome'
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo'
    },
    {
      title: 'Ativo',
      dataIndex: 'ativo',
      key: 'ativo',
      render: ativo => (ativo ? 'Sim' : 'Não')
    },
    {
      title: 'Editar',
      key: 'actions',
      render: renderActions
    }
  ];

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Table bordered columns={columns} dataSource={users} loading={loading} rowKey="codigo" />
      <Modal visible={isEditModalOpen} onCancel={closeEditModal} footer={null}>
        {!!user && user.tipo === 'D' && (
          <DonatorForm isEdit initialValues={user} loading={loading} />
        )}
        {!!user && user.tipo === 'I' && (
          <InstitutionForm isEdit initialValues={user} loading={loading} />
        )}
      </Modal>
    </>
  );
};

export default UsersTable;
