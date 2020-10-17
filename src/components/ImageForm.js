import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import LanguageForm from '../components/LanguageForm';

function ImageForm({
  setImageURL,
  imageURL,
  setFileName,
  setImageFile,
  fileName,
  setTextLang,
  textLang,
  convertImg,
}) {
  const createURL = (imageFile) => {
    let reader = new FileReader();
    reader.onload = (e) => setImageURL(e.target.result);
    reader.readAsDataURL(imageFile);
  };

  return (
    <div>
      <form onSubmit={convertImg} className='image-form'>
        <label htmlFor='file-upload' className='image-form__file-upload'>
          <div className='image-form__file-upload--incomplete'>
            <input
              id='file-upload'
              type='file'
              onChange={(e) => {
                let file = e.target.files[0];
                if (file) {
                  createURL(file);
                  setImageFile(file);
                  setFileName(file.name);
                }
              }}
              accept='image/x-png,image/jpeg'
              required
            />
            {!imageURL ? (
              <FontAwesomeIcon icon={faFileImage} />
            ) : (
              <img src={imageURL} alt='Uploaded file illustration' />
            )}
            <p>{fileName}</p>
          </div>
        </label>

        <div className='d-md-flex justify-content-between'>
          <LanguageForm setTextLang={setTextLang} textLang={textLang} />
          <div className='convert-image'>
            <button
              type='submit'
              className='convert-image__button h-45 btn btn-primary btn-block mt-3 mt-md-0 p-2'
            >
              Convert Image
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ImageForm;
