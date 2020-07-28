import React from 'react';

import {
  Container, 
  Component, 
  Heading,
  InputContainer,
  Label,
  InputRow,
  Mask,
  Input,
  PolicyLink,
  CheckboxContainer,
  Title,
  LinkLogin
} from './styles';
import './styles.css';

import ButtonPrimary from '../../components/Buttons';

import IconAccount from '../../assets/icons/user.svg';

const RegistrationForm = () => (
  <Container>
    <Component>
      <Heading>
        <img src={IconAccount} alt="user"/>
        <span>Регистрация</span>
      </Heading>
      <InputContainer>
      <Label>Ваш номер телефона</Label>
      <InputRow>
        <Mask><span>+(998)</span></Mask>
        <Input 
          type="tel" 
          name="phone" 
          mask={[' ',/\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} 
          showMask={true}
        />
      </InputRow>
      </InputContainer>
      <CheckboxContainer>
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <PolicyLink to="/policy-link">
          Ознакомлен с публичной офертой 
          иполитикой конфиденциальности 
        </PolicyLink>
      </CheckboxContainer>
      <ButtonPrimary btnPrimary>Дальше</ButtonPrimary>
      <Title>Если у вас уже имеется аккаунт <LinkLogin to="/login">Войдите</LinkLogin> </Title>
    </Component>
  </Container>
);

export default RegistrationForm;