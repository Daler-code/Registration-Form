import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container, 
  Component, 
  Heading,
  InputContainer,
  Input,
  Title,
  AlertComponent,
  TextWrapper,
  AlertBoxHeading,
  AlertHeading,
  AlertBox,
  Form
} from './styles';

import useForm from '../../hooks/useForm';

import ButtonPrimary from '../../components/Buttons';
import SpinnerSmall from '../../components/SpinnerSmall';

import IconCard from '../../assets/icons/credit-card.svg';

const CreditCardLink = () => {
  const [show, setShow] = useState(true);

  const {
    handleSubmit2,
    handleCard,
    handleExp,
    card,
    exp,
    error2,
    loading2,
    success2
  } = useForm();

  const history = useHistory();

  return (
    <Container>
      <Component>
        {
          !error2 && success2 && show ? (
            <AlertBox variant="success" onClose={() => setShow(false)} dismissible>
              <AlertHeading>Your data sent successfully!</AlertHeading>
              <p>You are redirected to SMS check page in 5 seconds!</p>
            </AlertBox>
          ) : (
            <AlertBox variant="danger" onClose={() => setShow(false)} dismissible>
              <AlertHeading>Something went wrong :/</AlertHeading>
              {/* <p>You are redirected to  Credit cards link page in 5 seconds!</p> */}
            </AlertBox> 
          )
        }
        <Heading>
          <img src={IconCard} alt="sms"/>
          <span>ВВЕДИТЕ ДАННЫЕ ДЛЯ ПРИВЯЗКИ ВАШЕЙ КАРТЫ</span>
        </Heading>
        <Title>
          *Данные по карте должны совпадать с указанным ФИО. На данной карте должны 
          быть ежемесячные поступления <span> В размере 1 млн. сум, на протяжении 6 месяцев.</span>
        </Title>
        <Form onSubmit={handleSubmit2}>
          <InputContainer>
            <Input 
              type="tel" 
              name="card" 
              placeholder="Введите номер карты"
              mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,]} 
              showMask={false}
              guide={false}
              value={card}
              onChange={handleCard}
            />
          </InputContainer>
          <InputContainer>
            <Input 
              type="tel" 
              name="exp" 
              placeholder="Введите месяц и год (мм/гг)"
              mask={[/\d/, /\d/, '/', /\d/, /\d/,]} 
              showMask={false}
              guide={false}
              value={exp}
              onChange={handleExp}
            />
          </InputContainer>
          <ButtonPrimary short btnPrimary>
            { !error2 && !success2 && loading2 ? 
              (<SpinnerSmall />) : 
              ("Дальше")
            }
          </ButtonPrimary>
        </Form>
      </Component>
      <AlertComponent>
        <TextWrapper>
          <AlertBoxHeading>Мы очень серезно относимся к информационной безопасности.</AlertBoxHeading>
          <span>
            Все данные передаются в зашифрованном криптографическом виде и не 
            доступны третьим лицам. Данные хранятся в безопасности.
          </span>
        </TextWrapper>
        <ButtonPrimary btnAlert>Подробнее</ButtonPrimary>
      </AlertComponent>
      {
      !loading2 && !error2 && success2 ? (
        setTimeout(() => {
          history.push('/sms-code-card');
        }, 5000)
      ) : null
    }
    </Container>
  );
};

export default CreditCardLink;