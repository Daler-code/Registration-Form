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

const SMSCodeCheck = () => (
  <Container>
    <Component>
      <Heading>
        <img src={IconSMS} alt="sms"/>
        <span>ПОДТВЕРДИТЕ СМС</span>
      </Heading>
      <InputContainer>
        <Input 
          type="tel" 
          name="code" 
          placeholder="Kод подтверждения"
          mask={[/\d/, /\d/, /\d/, /\d/,]} 
          showMask={false}
          guide={false}
        />
      </InputContainer>
      <Title>На ваш номер был выслан <span>код подтверждения</span></Title>
      <ButtonPrimary btnPrimary>Дальше</ButtonPrimary>
    </Component>
  </Container>
);

export default SMSCodeCheck;