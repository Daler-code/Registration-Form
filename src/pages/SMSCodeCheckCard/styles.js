import styled from 'styled-components';
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
    border-radius: 0px;
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
  margin-bottom: 50px;
  @media screen and (max-width: 550px) {
    margin-bottom: 40px;
  }
  img {
    width: 40px;
    height: auto;
    margin-right: 10px;
    @media screen and (max-width: 550px) {
      width: 30px;
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

export const Input = styled(MaskedInput)`
  width: 100%;
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
    border-radius: 8px;
  }
  &::placeholder {
    color: #009F80;
    font-size: 17px;
    font-weight: 500;
    text-indent: 20px;
  }
`;

export const Title = styled.div`
  width: 80%;
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-bottom: 30px;
  padding-left: 10px;
  span {
    color: #009F80;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    font-size: 14px;
  }
`;