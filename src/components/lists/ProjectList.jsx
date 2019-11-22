import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Typography } from 'antd';

import { fetchProjects } from '../../store/donations/actions';

import DonateButton from '../buttons/DonateButton';

const ProjectList = () => {
  const { projects, loading } = useSelector(state => state.donations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const items = projects.map(project => {
    const description = (
      <Typography.Paragraph ellipsis={{ rows: 3, expandable: true }}>
        {project.descricao}
      </Typography.Paragraph>
    );

    const donateButton = (
      <div style={{ marginLeft: '1rem' }}>
        <DonateButton project={project} />
      </div>
    );

    return (
      <List.Item key={project.codigo} extra={donateButton}>
        <List.Item.Meta title={project.nome} description={description} />
      </List.Item>
    );
  });

  const header = <Typography.Title level={2}>Projetos em busca de doação</Typography.Title>;
  return (
    <List loading={loading} header={header}>
      {items}
    </List>
  );
};

export default ProjectList;
