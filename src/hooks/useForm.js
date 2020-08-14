import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// BASIC AUTHORIZATION
const username = '169632';
const password = 'ykizECTJEku736Vva63eipJ7V7';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

const useForm = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [imgExists1, setImgExists1] = useState(false);
  const [imgExists2, setImgExists2] = useState(false);
  const [imgExists3, setImgExists3] = useState(false);
  //////////////////////////////////////////INPUTS FIRST STEP
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user_id, setUserId] = useState('');
  const [inputs, setInputs] = useState({
    username: '',
    lastname: '',
    patronymic: '',
    work_place: '',
    permanent_address: '',
    phone_home: '',
    passport_main: null,
    passport_address: null,
    passport_self: null,
    phone: ''
  });
////////////////////////////////////INPUTS SECOND STEP
const [error2, setError2] = useState(false);
const [loading2, setLoading2] = useState(false);
const [success2, setSuccess2] = useState(false);
const [card, setCard] = useState('');
const [exp, setExp] = useState('');
/////////////////////////////////////INPUTS THIRD STEP
const [error3, setError3] = useState(false);
const [loading3, setLoading3] = useState(false);
const [success3, setSuccess3] = useState(false);
const [code, setCode] = useState('');
  
  // HandleSubmit STEP ONE
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setLoading(true);
    console.log(inputs);
    // send data to API
    var bodyFormData = new FormData();
    Object.entries(inputs).forEach(([key, value]) => { bodyFormData.append(key, value) });

    const config = {
      method: 'post',
      url: 'https://zmarket.uz/api/clients/new-create',
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type':'multipart/form-data'
      },
      data: bodyFormData
    }
    axios(config)
    .then(function (response) {
      setUserId(response.data.user_id);
      console.log('user_id', response.data.user_id);
      if (response.status === 200) {
        setSuccess(true)
        setLoading(false)
        console.log('response in success', response)
      }
    })
    .catch(function (error) {
        setError(true)
        setLoading(false)
        setSuccess(false)
        console.log(error)
    })
    console.log(inputs);
  };

  // HandleSubmit STEP TWO
  const handleSubmit2 = (event) => {
    if (event) event.preventDefault();
    setLoading2(true);
     // send data to API
     var bodyFormData = new FormData();
     bodyFormData.append('card', card);
     bodyFormData.append('exp', exp);
     bodyFormData.append('user_id', user_id);

     const config = {
       method: 'post',
       url: 'https://zmarket.uz/api/clients/new-create',
       headers: {
         'Authorization': `Basic ${token}`,
         'Content-Type':'multipart/form-data'
       },
       data: bodyFormData
     }
     axios(config)
     .then(function (response) {
      if (response.status === 200) {
        setSuccess2(true)
        setLoading2(false)
        console.log('response in success', response)
      }
     })
     .catch(function (error) {
         setError2(true)
         setLoading2(false)
         setSuccess2(false)
         console.log(error)
     })
  };

   // HandleSubmit STEP THREE
   const handleSubmit3 = (event) => {
    if (event) event.preventDefault();
    setLoading3(true);
    // send data to API
    var bodyFormData = new FormData();
    bodyFormData.append('card', card);
    bodyFormData.append('code', code);
    bodyFormData.append('user_id', user_id);

    const config = {
      method: 'post',
      url: 'https://zmarket.uz/api/clients/new-create',
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type':'multipart/form-data'
      },
      data: bodyFormData
    }
    axios(config)
    .then(function (response) {
      if (response.status === 200) {
        setSuccess3(true)
        setLoading3(false)
        console.log('response in success', response)
      }
    })
    .catch(function (error) {
        setError3(true)
        setLoading3(false)
        setSuccess3(false)
        console.log(error)
    })
  };

/////////////////////////////////////////////////////////////////////////
  // HandleChange STEP ONE
  const handleChange = (event) => {
    event.persist();
    setInputs(inputs => (
      {...inputs, [event.target.name]: event.target.value}
    ));
  };

  // HandleCard
  const handleCard = (event) => {
    event.persist();
    setCard(event.target.value);
    console.log('card', card);
  };
  // HandleExp
  const handleExp = (event) => {
    event.persist();
    setExp(event.target.value);
    console.log('exp', exp);
  };

  // HandleChange STEP  THREE
  const handleCode = (event) => {
    event.persist();
    setCode(event.target.value);
  };

///////////////////////////////////////////////////////////////////////////
  // Uploading File1
  const  uploadFile1 = (event) => {
    event.persist();
      setInputs(inputs => (
        {...inputs, [event.target.name]: event.target.files[0]}
      ));
    
    setFile1(URL.createObjectURL(event.target.files[0]))
    setImgExists1(true)
  };

  // Uploading File2
  const uploadFile2 = (event) => {
    event.persist();
      setInputs(inputs => (
        {...inputs, [event.target.name]: event.target.files[0]}
      ));

    setFile2(URL.createObjectURL(event.target.files[0]))
    setImgExists2(true)
  };

  // Uploading File3
  const uploadFile3 = (event) => {
    event.persist();
      setInputs(inputs => (
        {...inputs, [event.target.name]: event.target.files[0]}
      ));

    setFile3(URL.createObjectURL(event.target.files[0]))
    setImgExists3(true)
  };
///////////////////////////////////////////////////////////////////////
  // Document Preview config
  let imgPreview1;
    if (file1) {
        imgPreview1 = <img src={file1} alt='' />
    };

  let imgPreview2;
  if (file2) {
      imgPreview2 = <img src={file2} alt='' />
  };

  let imgPreview3;
  if (file3) {
      imgPreview3 = <img src={file3} alt='' />
  };
////////////////////////////////////////////////////////////////////////
  return {
    handleSubmit,
    handleSubmit2,
    handleSubmit3,
    handleChange,
    handleCard,
    handleExp,
    handleCode,
    uploadFile1,
    uploadFile2,
    uploadFile3,
    inputs,
    exp,
    card,
    code,
    error,
    error2,
    error3,
    loading,
    loading2,
    loading3,
    success,
    success2,
    success3,
    imgPreview1,
    imgPreview2,
    imgPreview3,
    imgExists1,
    imgExists2,
    imgExists3,
  };
};
export default useForm;