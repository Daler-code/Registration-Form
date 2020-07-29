import React from 'react';

import {
  Container, 
  Component, 
  Heading,
  InputContainer,
  Input,
  Title
} from './styles';

import ButtonPrimary from '../../components/Buttons';

import IconSMS from '../../assets/icons/mail.svg';


const SMSCodeCheckCard = () => (
  <Container>
    <Component>
      <Heading>
        <img src={IconSMS} alt="sms"/>
        <span>ПОДТВЕРЖДЕНИЕ КАРТЫ</span>
      </Heading>
      <InputContainer>
        <Input 
          type="tel" 
          name="code" 
          placeholder="Kод подтверждения"
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/,]} 
          showMask={false}
          guide={false}
        />
      </InputContainer>
      <Title>
        * На балансе Вашего 
        <span> мобильного телефона </span> 
        должно быть не менее 100 сум
      </Title>
      <ButtonPrimary btnPrimary>Дальше</ButtonPrimary>
    </Component>
  </Container>
);

export default SMSCodeCheckCard;