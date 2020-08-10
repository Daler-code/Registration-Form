import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import {
  Container, 
  Component, 
  Heading, 
  SubHeading, 
  Row, 
  Input, 
  Row2, 
  Column,
  DocumentContainer,
  InputTel,
  InputRow,
  Mask,
  Row3,
  Img,
  Form,
  AlertSuccess
} from './styles';
import './styles.css';

import  useForm from '../../hooks/useForm';
import ButtonPrimary from '../../components/Buttons';
import SpinnerSmall from '../../components/SpinnerSmall';

import IconPassport from '../../assets/icons/passport.svg';

const PasportDataForm = () => {
  const [show, setShow] = useState(true);

  const {
    handleSubmit,
    handleChange,
    uploadFile1,
    uploadFile2,
    uploadFile3,
    inputs,
    submit,
    error,
    loading,
    success,
    imgPreview1,
    imgPreview2,
    imgPreview3,
    imgExists1,
    imgExists2,
    imgExists3
  } = useForm();

  const history = useHistory();
    

  return (
    <Container>
      <Component>
        {
          success && show ? (
            <AlertSuccess variant="success" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>You have Registered successfully!</Alert.Heading>
              <p>You are redirected to  Credit cards link page in 5 seconds!</p>
            </AlertSuccess>
          ) : (
            null
          )
        }
        <Heading>
          <img src={IconPassport} alt="sms"/>
          <span>ИНФОРМАЦИЯ О ПАСПОРТЕ</span>
        </Heading>
        <SubHeading>ВВЕДИТЕ ПАСПОРТНЫЕ ДАННЫЕ</SubHeading>
        <Form onSubmit={handleSubmit}>
          <Row2>
          <InputRow>
              <Mask><span>+(998)</span></Mask>
              <InputTel 
                type="tel" 
                name="phone" 
                mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} 
                showMask={false}
                placeholder="Ваш телефон"
                value={inputs.phone}
                onChange={handleChange}
              />
            </InputRow>
          </Row2>
          <Row>
            <Input 
              type="text" 
              name="username"
              minLength="2" 
              maxLength="20"  
              placeholder="Имя на латинице" 
              value={inputs.username}
              onChange={handleChange}
            />
            <Input 
              type="text"
              name="lastname" 
              minLength="2" 
              maxLength="20" 
              placeholder="Фамилия на латинице" 
              value={inputs.lastname} 
              onChange={handleChange}
            />
          </Row>
          <Row>
            <Input 
              type="text" 
              name="patronymic"
              minLength="2" 
              maxLength="20" 
              placeholder="Отчество на латинице" 
              value={inputs.patronymic} 
              onChange={handleChange}
            /> 
            <Input 
              type="text" 
              name='work_place'
              minLength="2" 
              maxLength="100" 
              placeholder="Место 
              работы/учебы" 
              value={inputs.work_place} 
              onChange={handleChange}
            />
          </Row>
          <Row>
            <Input 
              type="text" 
              name="permanent_address"
              minLength="2" 
              maxLength="100" 
              placeholder="Постоянный адрес" 
              value={inputs.permanent_address}
              onChange={handleChange}
            /> 
          <InputRow>
              <Mask><span>+(998)</span></Mask>
              <InputTel 
                type="tel" 
                name="phone_home" 
                mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} 
                showMask={false}
                placeholder="Домашний телефон"
                value={inputs.phone_home}
                onChange={handleChange}
              />
            </InputRow>
          </Row>
          <Row3>
            <Column> 
              <DocumentContainer>
                {
                  imgExists1 ? (
                    <Img>{imgPreview1}</Img>
                  ) : (
                    <span>Селфи с паспортом</span>
                  )
                }
              </DocumentContainer>
              <label className='custom-file-upload'>
                Выберите файл
                <input 
                  className="document-submit-button" 
                  name="passport_self" 
                  type="file" 
                  onChange={uploadFile1}
                  value={inputs.passport_self} 
                />
              </label> 
            </Column>
            <Column> 
              <DocumentContainer>
                {
                  imgExists2 ? (
                    <Img>{imgPreview2}</Img>
                    ) : (
                      <span>Лицевая сторона паспорта</span>
                    )
                }
              </DocumentContainer>
              <label className='custom-file-upload'>
                Выберите файл
                <input 
                  className="document-submit-button" 
                  name="passport_main" 
                  type="file" 
                  onChange={uploadFile2} 
                  value={inputs.passport_main} 
                />
              </label>  
            </Column>
            <Column> 
              <DocumentContainer>
                {
                  imgExists3 ? (
                    <Img>{imgPreview3}</Img>
                    ): ( 
                      <span>Прописка на паспорте</span>
                    )
                } 
              </DocumentContainer>
              <label className='custom-file-upload'>
                Выберите файл
                <input 
                  className="document-submit-button" 
                  name="passport_address" 
                  type="file" 
                  onChange={uploadFile3}
                  value={inputs.passport_address}  
                />
              </label>  
            </Column>
          </Row3>
          <ButtonPrimary short btnPrimary>
            {
              loading ? (<SpinnerSmall />) : ('Дальше')
            }
          </ButtonPrimary>
        </Form>
    </Component>
    {
      !loading && !error && success ? (
        setTimeout(() => {
          history.push('/credit-card');
        }, 5000)
      ) : null
    }
  </Container>
  )
};

export default PasportDataForm;