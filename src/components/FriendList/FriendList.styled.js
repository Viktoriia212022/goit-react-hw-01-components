import styled from '@emotion/styled';

export const Card = styled.ul`
  margin-top: 50px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  height: 100px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.33);
  border-radius: 5px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const IsOnline = styled.span`
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${props => {
    if (props.children === true) {
      return '#0fda00';
    }
    return '#ff3535';
  }};
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  margin-left: 20px;
`;