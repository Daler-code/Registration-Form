import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container, 
  Component, 
  Heading,
  InputContainer,
  Input,
  Title,
  Form,
  AlertHeading,
  AlertBox
} from './styles';

import useForm from '../../hooks/useForm';

import ButtonPrimary from '../../components/Buttons';
import SpinnerSmall from '../../components/SpinnerSmall';

import IconSMS from '../../assets/icons/mail.svg';


const SMSCodeCheckCard = () => {
  const [show, setShow] = useState(true);

  const {
    handleSubmit3,
    handleCode,
    code,
    error3,
    loading3,
    success3
  } = useForm();

  const history = useHistory();

  return (
    <Container>
      <Component>
        {
          !error3 && success3 && show ? (
            <AlertBox variant="success" onClose={() => setShow(false)} dismissible>
              <AlertHeading>Code sent successfully!</AlertHeading>
              <p>You are redirected to success page in 5 seconds!</p>
            </AlertBox>
          ) : (
            null
          )
        }
        {
          !success3 && error3 && show ? (
            <AlertBox variant="danger" onClose={() => setShow(false)} dismissible>
              <AlertHeading>Something went wrong :/</AlertHeading>
              {/* <p>You are redirected to  Credit cards link page in 5 seconds!</p> */}
            </AlertBox> 
          ) : (
            null
          )
        }
        <Heading>
          <img src={IconSMS} alt="sms"/>
          <span>ПОДТВЕРЖДЕНИЕ КАРТЫ</span>
        </Heading>
        <Form onSubmit={handleSubmit3}>
          <InputContainer>
            <Input 
              type="tel" 
              name="code" 
              placeholder="Kод подтверждения"
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/,]} 
              showMask={false}
              guide={false}
              value={code}
              onChange={handleCode}
            />
          </InputContainer>
          <Title>
            * На балансе Вашего 
            <span> мобильного телефона </span> 
            должно быть не менее 100 сум
          </Title>
          <ButtonPrimary btnPrimary>
            { !error3 && !success3 && loading3 ? 
                (<SpinnerSmall />) : 
                ("Дальше")
            }
          </ButtonPrimary>
        </Form>
      </Component>
        {
          !loading3 && !error3 && success3 ? (
            setTimeout(() => {
              history.push('/success');
            }, 5000)
          ) : null
        }
    </Container>
    )
  };

export default SMSCodeCheckCard;