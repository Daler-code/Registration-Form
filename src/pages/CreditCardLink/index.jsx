import React from 'react';

import {
  Container, 
  Component, 
  Heading,
  InputContainer,
  Input,
  Title,
  AlertComponent,
  TextWrapper,
  AlertHeading
} from './styles';

import ButtonPrimary from '../../components/Buttons';

import IconCard from '../../assets/icons/credit-card.svg';

const CreditCardLink = () => (
  <Container>
    <Component>
      <Heading>
        <img src={IconCard} alt="sms"/>
        <span>ВВЕДИТЕ ДАННЫЕ ДЛЯ ПРИВЯЗКИ ВАШЕЙ КАРТЫ</span>
      </Heading>
      <Title>
        *Данные по карте должны совпадать с указанным ФИО. На данной карте должны 
        быть ежемесячные поступления <span> В размере 1 млн. сум, на протяжении 6 месяцев.</span>
      </Title>
      <InputContainer>
        <Input 
          type="tel" 
          name="code" 
          placeholder="Введите номер карты"
          mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,]} 
          showMask={false}
          guide={false}
        />
      </InputContainer>
      <InputContainer>
        <Input 
          type="tel" 
          name="code" 
          placeholder="Введите месяц и год (мм/гг)"
          mask={[/\d/, /\d/, '/', /\d/, /\d/,]} 
          showMask={false}
          guide={false}
        />
      </InputContainer>
      <ButtonPrimary short btnPrimary>Дальше</ButtonPrimary>
    </Component>
    <AlertComponent>
      <TextWrapper>
        <AlertHeading>Мы очень серезно относимся к информационной безопасности.</AlertHeading>
        <span>
          Все данные передаются в зашифрованном криптографическом виде и не 
          доступны третьим лицам. Данные хранятся в безопасности.
        </span>
      </TextWrapper>
      <ButtonPrimary btnAlert>Подробнее</ButtonPrimary>
    </AlertComponent>
  </Container>
);

export default CreditCardLink;