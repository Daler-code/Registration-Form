import styled from 'styled-components';

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
  justify-content: center;
  padding: 0;
  margin: 0;
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
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
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
  /* border: 2px solid red; */
  @media screen and (max-width: 550px) {
    margin-bottom: 30px;
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
    margin-left: 10px;
    @media screen and (max-width: 550px) {
      font-size: 18px;
    }
  }
`;

export const Title = styled.div`
  width: 80%;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #009F80;
  font-weight: 500;
  margin-bottom: 50px;
  padding-left: 10px;
  @media screen and (max-width: 550px) {
    width: 100%;
    font-size: 14px;
    margin-bottom: 30px;
  }
`;