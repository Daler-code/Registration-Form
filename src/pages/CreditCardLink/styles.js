import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

import ImageBackground from '../../assets/images/FormPageBg.png';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  background-image: url(${ImageBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  /* border: 2px solid black; */
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 550px) {
    background-image: none;
    background-color: white;
    padding: 0;
  }
`;

export const Component = styled.div`
  width: 60vw;
  height: fit-content;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 25px;
  margin-left: 100px;
  /* border: 2px solid red; */
  @media screen and (max-width: 1200px) {
    width: 70vw;
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
    margin-left: 0;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 80%;
    border-radius: 0;
    margin-top: 100px;
    margin-bottom: auto;
    padding: 30px;
  }
`;

export const AlertComponent = styled.div`
  width: 63vw;
  height: fit-content;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 23px;
  margin-left: 100px;
  margin-top: 30px;
  @media screen and (max-width: 1200px) {
    width: 75vw;
  }
  @media screen and (max-width: 768px) {
    width: 85vw;
    margin-left: 0;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 20%;
    border-radius: 0;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    padding: 30px;
  }
`;

export const TextWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  border: 2px solid red;
  span {
    font-size: 16px;
    font-weight: 500;
    color: #9A9A9A;
    @media screen and (max-width: 550px) {
      width: 100%;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      margin-bottom: 20px;
      padding-right: 0;
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

export const AlertHeading = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #009F80;
  line-height: 25px;
  margin-bottom: 20px;
  @media screen and (max-width: 550px) {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
`;

export const Heading = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  text-align: center;
  @media screen and (max-width: 550px) {
    margin-bottom: 30px;
  }
  img {
    width: 50px;
    height: auto;
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
    /* border: 2px solid red; */
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 25px;
    }
    @media screen and (max-width: 550px) {
      font-size: 16px;
      line-height: 23px;
      margin-left: 0;
    }
  }
`;

export const InputContainer = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
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
  width: 85%;
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-bottom: 30px;
  /* border: 2px solid red; */
  span {
    color: #009F80;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    font-size: 14px;
    text-align: center;
  }
`;