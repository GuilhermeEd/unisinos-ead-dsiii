import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Modal } from 'antd';

import { fetchProjects, deleteProject, fetchProject } from '../../store/projects/actions';
import { isAdmin } from '../../utils/permissions';
import ActionList from '../lists/ActionList';
import CreateProjectButton from '../buttons/CreateProjectButton';
import ProjectForm from '../forms/ProjectForm';

const ProjectsTable = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { project, projects, loading, projectUpdated } = useSelector(state => state.projects);
  const dispatch = useDispatch();

  const toggleEditModal = record => {
    const newModalState = !isEditModalOpen;

    if (newModalState && record) {
      dispatch(fetchProject(record.codigo));
    }

    setIsEditModalOpen(newModalState);
  };

  const closeEditModel = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    if (projectUpdated) {
      closeEditModel();
    }
  }, [projectUpdated]);

  const renderActions = (text, record) => (
    <ActionList
      onEdit={() => toggleEditModal(record)}
      onDelete={isAdmin() ? () => dispatch(deleteProject(record.codigo)) : null}
    />
  );

  const columns = [
    {
      title: 'Instituição',
      dataIndex: 'nome_instituicao',
      key: 'nome_instituicao'
    },
    {
      title: 'Nome',
      dataIndex: 'nome_projeto',
      key: 'nome_projeto'
    },
    {
      title: 'Ativo',
      dataIndex: 'ativo',
      key: 'ativo',
      render: text => (text ? 'Sim' : 'Não')
    },
    {
      title: 'Total de Doações',
      dataIndex: 'total_doacao',
      key: 'total_doacao',
      render: text => `R$ ${text}`
    },
    {
      title: <CreateProjectButton disabled={isAdmin()} />,
      key: 'actions',
      render: renderActions
    }
  ];

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <>
      <Table bordered columns={columns} dataSource={projects} loading={loading} rowKey="codigo" />
      <Modal visible={isEditModalOpen} onCancel={toggleEditModal} footer={null}>
        <ProjectForm isEdit initialValues={project} loading={loading} />
      </Modal>
    </>
  );
};

export default ProjectsTable;
