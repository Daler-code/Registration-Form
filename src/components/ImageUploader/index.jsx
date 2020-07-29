import React, { useState } from 'react';


const ImageUploader = () => {
    const [file, setFile] = useState(null);

    const  uploadSingleFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    };

    let imgPreview;
    if (file) {
        imgPreview = <img src={file} alt='' />
    };

        return (
            <form>
                <div className="form-group preview">
                    {imgPreview}
                </div>
                <div className="form-group">
                    <input type="file" className="form-control" onChange={uploadSingleFile} />
                </div>
            </form >
        )
    };

export default ImageUploader;

