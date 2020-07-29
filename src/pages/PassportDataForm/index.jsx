import React, {useState} from 'react';

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
  Img
} from './styles';
import './styles.css';

import ButtonPrimary from '../../components/Buttons';

import IconPassport from '../../assets/icons/passport.svg';

const PasportDataForm = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [imgExists1, setImgExists1] = useState(false);
  const [imgExists2, setImgExists2] = useState(false);
  const [imgExists3, setImgExists3] = useState(false);

  // Uploading File1
  const  uploadFile1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]))
    setImgExists1(true)
  };

  // Uploading File2
  const  uploadFile2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]))
    setImgExists2(true)
  };

  // Uploading File3
  const  uploadFile3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]))
    setImgExists3(true)
  };

  // Setting url to img src
  let imgPreview1;
    if (file1) {
        imgPreview1 = <img src={file1} alt='' />
    };

    // Setting url to img src
  let imgPreview2;
  if (file2) {
      imgPreview2 = <img src={file2} alt='' />
  };

  // Setting url to img src
  let imgPreview3;
    if (file3) {
        imgPreview3 = <img src={file3} alt='' />
    };


  return (
  <Container>
    <Component>
      <Heading>
        <img src={IconPassport} alt="sms"/>
        <span>ИНФОРМАЦИЯ О ПАСПОРТЕ</span>
      </Heading>
      <SubHeading>ВВЕДИТЕ ПАСПОРТНЫЕ ДАННЫЕ</SubHeading>
      <Row2>
      <InputRow>
          <Mask><span>+(998)</span></Mask>
          <InputTel 
            type="tel" 
            name="phone" 
            mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} 
            showMask={false}
            placeholder="Ваш телефон"
          />
        </InputRow>
      </Row2>
      <Row>
        <Input type="text" minLength="2" maxLength="20"  placeholder="Имя на латинице" />
        <Input type="text" minLength="2" maxLength="20" placeholder="Фамилия на латинице" />
      </Row>
      <Row>
        <Input type="text" minLength="2" maxLength="20" placeholder="Отчество на латинице" /> 
        <Input type="text" minLength="2" maxLength="100" placeholder="Место работы/учебы" />
      </Row>
      <Row>
        <Input type="text" minLength="2" maxLength="100" placeholder="Постоянный адрес" /> 
      <InputRow>
          <Mask><span>+(998)</span></Mask>
          <InputTel 
            type="tel" 
            name="phone" 
            mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} 
            showMask={false}
            placeholder="Домашний телефон"
          />
        </InputRow>
      </Row>
      <Row3>
        <Column> 
          <DocumentContainer>
            {
              imgExists1 ? (<Img>{imgPreview1}</Img>): (<span>Селфи с паспортом</span>)
            }
          </DocumentContainer>
          <label className='custom-file-upload'>
            Выберите файл
            <input 
              className="document-submit-button" 
              name="myFile" 
              type="file" 
              onChange={uploadFile1} 
            />
          </label> 
        </Column>
        <Column> 
          <DocumentContainer>
            {
              imgExists2 ? (<Img>{imgPreview2}</Img>): (<span>Лицевая сторона паспорта</span>)
            }
          </DocumentContainer>
          <label className='custom-file-upload'>
            Выберите файл
            <input 
              className="document-submit-button" 
              name="myFile" 
              type="file" 
              onChange={uploadFile2} 
            />
          </label>  
        </Column>
        <Column> 
          <DocumentContainer>
            {
              imgExists3 ? (<Img>{imgPreview3}</Img>): ( <span>Прописка на паспорте</span>)
            } 
          </DocumentContainer>
          <label className='custom-file-upload'>
            Выберите файл
            <input 
              className="document-submit-button" 
              name="myFile" 
              type="file" 
              onChange={uploadFile3} 
            />
          </label>  
        </Column>
      </Row3>
      <ButtonPrimary short btnPrimary>Дальше</ButtonPrimary>
  </Component>
</Container>
  )
};

export default PasportDataForm;