import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

import ImageBackground from '../../assets/images/FormPageBg.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImageBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Component = styled.div`
  width: 40vw;
  height: fit-content;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 25px;
  margin-left: 150px;
  @media screen and (max-width: 1200px) {
    width: 50vw;
  }
  @media screen and (max-width: 768px) {
    width: 60vw;
    margin-left: 0;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Heading = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  img {
    width: 50px;
    height: auto;
    margin-right: 10px;
    @media screen and (max-width: 550px) {
      width: 40px;
    }
  }
  span {
    font-size: 23px;
    font-weight: 500;
    color: black;
    line-height: 35px;
    text-transform: uppercase;
    margin-left: 10px;
    @media screen and (max-width: 550px) {
      font-size: 20px;
    }
  }
`;

export const InputContainer = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /* border: 2px solid red; */
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #009F80;
  margin-bottom: 15px;
`;

export const InputRow = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
`;

export const Mask = styled.div`
  width: 120px;
  height: 57px;
  display: flex;
  align-items: center;
  background-color: #C6E5D3;
  border-radius: 11px;
  margin-right: -25px;
  padding-left: 30px;
  span {
    font-size: 18px;
    font-weight: 500;
    color: #009F80;
    margin-top: -4px;
  }
  @media screen and (max-width: 550px) {
    border-radius: 8px;
  }
`;

export const Input = styled(MaskedInput)`
  width: 100%;
  height: 55px;
  background-color: #C6E5D3;
  color: #009F80;
  font-size: 18px;
  font-weight: 500;
  border-radius: 13px;
  border: none;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 550px) {
    border-radius: 8px;
  }
`;


export const CheckboxContainer =  styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const PolicyLink =  styled(Link)`
  font-size: 13px;
  font-weight: 500;
  text-decoration: underline;
  color: #9A9A9A;
  cursor: pointer;
  margin-left: 50px;
  @media screen and (max-width: 550px) {
    font-size: 11px;
    margin-left: 40px;
  }
`;

export const Title = styled.span`
  font-size: 16px;
  color: #9A9A9A;
  font-weight: 500;
  margin-top: 30px;
`;

export const LinkLogin = styled(Link)`
  font-size: 16px;
  color: #009F80;
  font-weight: 500;
  margin-top: 30px;
`;