import styled from '@emotion/styled';

export const DelButton = styled.button`
  display: inline-block;
  color: #252537;

  width: 150px;
  height: 50px;

  padding: 0 10px;
  background: #fff;
  border-radius: 5px;

  outline: none;
  border: none;

  cursor: pointer;
  text-align: center;
  transition: all 0.2s linear;

  letter-spacing: 0.05em;
  &:active {
    background-color: #b8f2e6;
  }
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
