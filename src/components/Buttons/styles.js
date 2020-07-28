import styled, { css } from 'styled-components';

const getBtnStyle = props => {
  if (props.btnPrimary) {
    return BtnPrimary;
  } else {
    return Container;
  }
};

export const Container = styled.button`
  width: 100%;
  height: 55px;
  border: none;
  &:focus {
    outline: none;
  }
  ${getBtnStyle}
`;

export const BtnPrimary = css`
  width: 80%;
  height: 60px;
  border: none;
  border-radius: 11px;
  background-color: #009F80;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 1s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #009F8090;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 55px;
    font-size: 16px;
  }
`;