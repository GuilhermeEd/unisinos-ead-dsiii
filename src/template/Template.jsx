import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import AdminPermission from '../components/permissions/AdminPermission';
import DonatorPermission from '../components/permissions/DonatorPermission';
import InstitutionPermission from '../components/permissions/InstitutionPermission';

import * as Styled from './styles/Template.styles';

const Template = ({ children, match }) => {
  const selectedKeys = [match.path.substr(1)];

  return (
    <Styled.Container>
      <Styled.Header>
        <Menu mode="horizontal" selectedKeys={selectedKeys}>
          <Menu.Item key="new-user">
            <Link to="/new-user">Criar Usuário</Link>
          </Menu.Item>
          <AdminPermission>
            <Menu.Item key="manage-projects">
              <Link to="/manage-projects">Projetos</Link>
            </Menu.Item>
          </AdminPermission>
          <InstitutionPermission>
            <Menu.Item key="manage-projects">
              <Link to="/manage-projects">Projetos</Link>
            </Menu.Item>
          </InstitutionPermission>
          <DonatorPermission>
            <Menu.Item key="donate">
              <Link to="/donate">Doar</Link>
            </Menu.Item>
          </DonatorPermission>
        </Menu>
      </Styled.Header>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Container>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(Template);
