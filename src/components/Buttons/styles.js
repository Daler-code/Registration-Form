import styled, { css } from 'styled-components';

const getBtnStyle = props => {
  if (props.btnPrimary) {
    return BtnPrimary;
  } else if (props.btnAlert) {
    return BtnAlert;
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
  width: ${(props) => props.short ? '60%' : '80%'};
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
    width: ${(props) => props.short ? '80%' : '100%'};
    height: 55px;
    font-size: 16px;
  }
`;

export const BtnAlert = css`
  width: 25%;
  height: 50px;
  border: none;
  border-radius: 11px;
  background-color: #6EBD8F;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 1s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color:  #6EBD8F90;
  }
  @media screen and (max-width: 550px) {
    width: 50%;
    height: 45px;
    font-size: 14px;
    border-radius: 8px;
  }
`;