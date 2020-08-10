import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import { Alert } from 'react-bootstrap';

import ImageBackground from '../../assets/images/FormPageBg.png';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  background-image: url(${ImageBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 991px) {
    background-image: none;
    background-color: white;
  }
`;

export const Component = styled.div`
  width: 70vw;
  height: fit-content;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 991px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 550px) {
    padding: 30px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    width: 40px;
    height: auto;
    margin-right: 10px;
    @media screen and (max-width: 550px) {
      width: 30px;
      margin-bottom: 10px;
    }
  }
  span {
    font-size: 23px;
    font-weight: 500;
    color: black;
    line-height: 35px;
    margin-left: 10px;
    @media screen and (max-width: 550px) {
      font-size: 18px;
    }
  }
`;

export const SubHeading = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: black;
  font-weight: 500;
  margin-bottom: 30px;
  text-transform: uppercase;
  @media screen and (max-width: 550px) {
    font-size: 15px;
  }
`;

export const Row = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Row2 = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Row3 = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Column = styled.div`
  width: 28%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 550px) {
    width: 60%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;

export const DocumentContainer = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-color: #C6E5D3;
  border: 2px solid #13B86D;
  border-radius: 15px;
  text-align: center;
  overflow: hidden;
  span {
    font-size: 16px;
    color: #009F80;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InputTel = styled(MaskedInput)`
  width: 100%;
  height: 55px;
  background-color: #C6E5D3;
  color: #009F80;
  font-size: 17px;
  font-weight: 500;
  border-radius: 13px;
  border: none;
  text-indent: 5px;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #C6E5D3;
  }
  @media screen and (max-width: 550px) {
    border-radius: 8px;
  }
  &::placeholder {
    color: #009F80;
    font-size: 17px;
    font-weight: 500;
  }
`;

export const InputRow = styled.div`
  width: 45%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 550px) {
    width: 80%;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Mask = styled.div`
  width: 120px;
  height: 55px;
  display: flex;
  align-items: center;
  background-color: #C6E5D3;
  border-radius: 11px;
  margin-right: -25px;
  padding-left: 10px;
  span {
    font-size: 18px;
    font-weight: 500;
    color: #009F80;
  }
  @media screen and (max-width: 550px) {
    border-radius: 8px;
  }
`;

export const Input = styled.input`
  width: 45%;
  height: 55px;
  background-color: #C6E5D3;
  color: #009F80;
  font-size: 17px;
  font-weight: 500;
  border-radius: 13px;
  border: none;
  text-indent: 20px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 550px) {
    width: 80%;
    border-radius: 8px;
    margin-bottom: 30px;
  }
  &::placeholder {
    color: #009F80;
    font-size: 17px;
    font-weight: 500;
    text-indent: 20px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const AlertSuccess = styled(Alert)`
  width: 100%;
`;