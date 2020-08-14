import React from 'react';

import {
  Container, 
  Component, 
  Heading,
  Title
} from './styles';

import ButtonPrimary from '../../components/Buttons';

import IconSuccess from '../../assets/icons/tick.svg';

const RegistrationSuccess = () => (
  <Container>
    <Component>
      <Heading>
        <img src={IconSuccess} alt="sms"/>
        <span>Спасибо за регистрацию!</span>
      </Heading>
      <Title>
        В течении 30 минут ваш аккаунт пройдет верификацию. Статус верификации можно
        проверить в личном кабинете. После можете приступать к покупкам.
      </Title>
      <ButtonPrimary btnPrimary >
        <a href="https://www.google.com/">
          Кабинет
        </a>
      </ButtonPrimary>
    </Component>
  </Container>
);

export default RegistrationSuccess;