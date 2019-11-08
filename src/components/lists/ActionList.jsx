import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Icon, Popconfirm, Tooltip } from 'antd';
import compact from 'lodash/compact';
import last from 'lodash/last';

import * as Styled from './styles/ActionList.style';

const renderActionButtons = icons =>
  icons.map(icon =>
    icon === last(icons) || compact(icons).length === 1 ? (
      <span key={icon.props.title}>{icon}</span>
    ) : (
      <span key={icon.props.title}>
        {icon}
        <Divider type="vertical" />
      </span>
    )
  );

const renderIcon = (onClick, tooltip, IconComponent, type) =>
  onClick && (
    <Tooltip title={tooltip}>
      <IconComponent onClick={onClick} type={type} />
    </Tooltip>
  );

const renderPopconfirmIcon = (onClick, tooltip, IconComponent, type) =>
  onClick && (
    <Tooltip title={tooltip}>
      <Popconfirm
        arrowPointAtCenter
        cancelText="Não"
        icon={<Icon type="question-circle-o" style={{ color: '#ff4d4f' }} />}
        okText="Sim"
        okType="danger"
        onConfirm={onClick}
        placement="bottomRight"
        title="Tem certeza?"
      >
        <IconComponent type={type} />
      </Popconfirm>
    </Tooltip>
  );

const ActionList = ({ onView, onPhoto, onEdit, onDownload, onDelete }) => {
  const actionButtons = renderActionButtons(
    compact([
      renderIcon(onView, 'Visualizar', Styled.ViewIcon, 'eye-o'),
      renderIcon(onPhoto, 'Foto', Styled.PhotoIcon, 'camera'),
      renderIcon(onEdit, 'Editar', Styled.EditIcon, 'edit'),
      renderIcon(onDownload, 'Download', Styled.DownloadIcon, 'download'),
      renderPopconfirmIcon(onDelete, 'Deletar', Styled.DeleteIcon, 'delete')
    ])
  );

  return (
    <span className="action-list">
      {actionButtons.length > 0 ? (
        actionButtons
      ) : (
        <Tooltip arrowPointAtCenter placement="topRight" title="Não há ações possíveis">
          <Icon style={{ color: '#b0b0b0' }} type="info-circle" theme="outlined" />
        </Tooltip>
      )}
    </span>
  );
};

ActionList.propTypes = {
  onView: PropTypes.func,
  onPhoto: PropTypes.func,
  onEdit: PropTypes.func,
  onDownload: PropTypes.func,
  onDelete: PropTypes.func
};

ActionList.defaultProps = {
  onView: null,
  onPhoto: null,
  onEdit: null,
  onDownload: null,
  onDelete: null
};

export default ActionList;
