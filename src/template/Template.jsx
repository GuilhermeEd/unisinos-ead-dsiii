import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Menu, Avatar, Typography } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import * as permissions from '../utils/permissions';

import * as Styled from './styles/Template.styles';

const getUserTypeName = type =>
  ({
    I: 'Instituição',
    D: 'Doador',
    A: 'Administrador'
  }[type]);

const Template = ({ children, match }) => {
  const { user } = useSelector(store => store.auth);
  const selectedKeys = [match.path.substr(1)];

  const isNewUser = permissions.isNewUser();
  const isAdmin = permissions.isAdmin();
  const isInstitution = permissions.isInstitution();
  const isDonator = permissions.isDonator();

  return (
    <Styled.Container>
      <Styled.Header>
        <Menu mode="horizontal" selectedKeys={selectedKeys}>
          {isNewUser && (
            <Menu.Item key="new-user">
              <Link to="/new-user">Criar Usuário</Link>
            </Menu.Item>
          )}
          {(isAdmin || isInstitution) && (
            <Menu.Item key="manage-projects">
              <Link to="/manage-projects">Projetos</Link>
            </Menu.Item>
          )}
          {isAdmin && (
            <Menu.Item key="manage-users">
              <Link to="/manage-users">Usuários</Link>
            </Menu.Item>
          )}
          {isDonator && (
            <Menu.Item key="donate">
              <Link to="/donate">Doar</Link>
            </Menu.Item>
          )}
        </Menu>
        {user && (
          <Styled.User>
            <Styled.UserInfo>
              <Typography.Text>{user.nome}</Typography.Text>
              <Typography.Text type="secondary" style={{ fontSize: '90%' }}>
                {user && getUserTypeName(user.tipo)}
              </Typography.Text>
            </Styled.UserInfo>
            <Styled.UserAvatar>
              <Avatar icon="user" />
            </Styled.UserAvatar>
          </Styled.User>
        )}
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
