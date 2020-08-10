import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const useForm = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [imgExists1, setImgExists1] = useState(false);
  const [imgExists2, setImgExists2] = useState(false);
  const [imgExists3, setImgExists3] = useState(false);
  //////////////////////////////////////////INPUT FILE
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);
  const [success, setSuccess] = useState(false);
  const [inputs, setInputs] = useState({
    username: '',
    lastname: '',
    patronymic: '',
    work_place: '',
    permanent_address: '',
    phone_home: '',
    passport_main: '',
    passport_address: '',
    passport_self: '',
    phone: ''
  });
  
  // HandleSubmit
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setLoading(true);
    setSubmit(true);
    console.log(inputs);
    // send data to API
    const username = '169632';
    const password = 'ykizECTJEku736Vva63eipJ7V7';
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
    var bodyFormData = new FormData();
    Object.entries(inputs).forEach(([key, value])=>{ bodyFormData.append(key, value) });

    const config = {
      method: 'post',
      url: '/new-create',
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type':'multipart/form-data'
      },
      data: bodyFormData
    }
    axios(config)
    .then(function (response) {
      if (response.status === 200) {
        setSuccess(true)
        setLoading(false)
        setSubmit(false)
        console.log('response in success', response)
      } else {
        setError(true)
        setLoading(false)
        setSubmit(true)
      }
      console.log('response in error', response)
    })
    .catch(function (error) {
        setError(true)
        setLoading(false)
        setSuccess(false)
        setSubmit(false)
    })
    console.log(inputs);
  };


  // HandleChange
  const handleChange = (event) => {
    event.persist();
    setInputs(inputs => (
      {...inputs, [event.target.name]: event.target.value}
    ));
  };


  // Uploading File1
  const  uploadFile1 = (event) => {
    event.persist();
    setInputs(inputs => (
      {...inputs, [event.target.name]: event.target.value}
    ));
    setFile1(URL.createObjectURL(event.target.files[0]))
    setImgExists1(true)
  };

  // Uploading File2
  const uploadFile2 = (event) => {
    event.persist();
    setInputs(inputs => (
      {...inputs, [event.target.name]: event.target.value}
    ));
    setFile2(URL.createObjectURL(event.target.files[0]))
    setImgExists2(true)
  };

  // Uploading File3
  const  uploadFile3 = (event) => {
    event.persist();
    setInputs(inputs => (
      {...inputs, [event.target.name]: event.target.value}
    ));
    setFile3(URL.createObjectURL(event.target.files[0]))
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

  return {
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
  };
};

export default useForm;