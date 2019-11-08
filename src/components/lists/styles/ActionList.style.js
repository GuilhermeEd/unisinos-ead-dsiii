import styled from 'styled-components';
import { Icon } from 'antd';

export const IconStyle = `
  cursor: pointer !important;
`;

export const ViewIcon = styled(Icon)`
  ${IconStyle};
  color: #3498db !important;
`;

export const PhotoIcon = styled(Icon)`
  ${IconStyle};
  color: #7327e5 !important;
`;

export const EditIcon = styled(Icon)`
  ${IconStyle};
  color: #f39c12 !important;
`;

export const DownloadIcon = styled(Icon)`
  ${IconStyle};
  color: #2ecc71 !important;
`;

export const DeleteIcon = styled(Icon)`
  ${IconStyle};
  color: #ff4d4f !important;
`;
