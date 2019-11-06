import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  flex: ${props => props.flex};
  :not(:last-of-type) {
    margin-right: 1rem;
  }
`;
