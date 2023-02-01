import styled from '@emotion/styled';

export const Table = styled.table`
  width: 1200px;
  margin-top: 50px;
  border-radius: 5px;
  border-spacing: 0;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.59);
`;

export const TrHead = styled.tr`
  background-color: #00bce2;
  color: #ffffff;
`;

export const Th = styled.th`
  width: calc(1200px / 3);
  font-size: 30px;
  font-weight: 600;
  padding: 20px;
  border: 1px solid #dedede;
  &:last-child {
    border-right: 0;
  }
`;

export const TrBody = styled.tr`
  &:nth-of-type(2n) {
    background-color: #e3e3e3;
  }
`;

export const Td = styled.td`
  text-transform: capitalize;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  padding: 20px;
  border: 1px solid #dedede;
`;