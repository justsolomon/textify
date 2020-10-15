import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import Layout from '../components/Layout';
import ImageForm from '../components/ImageForm';
import ConvertProgress from '../components/ConvertProgress';
import useStorage from '../hooks/useStorage';
import { v4 as uuidv4 } from 'uuid';
import MetaData from '../components/MetaData';

function Home() {
  const [imageFile, setImageFile] = useState({});
  const [fileName, setFileName] = useState('Upload Image');
  const [imageText, setImageText] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [textLang, setTextLang] = useState('');
  const [progress, setProgress] = useState({ progress: 0, status: '' });
  const [progressHidden, setProgressHidden] = useState(true);
  const [saveQuery] = useStorage();

  //generate unique id for note
  const id = uuidv4();

  const convertImg = (e) => {
    e.preventDefault();

    //set language to english by default if language isn't selected
    if (textLang === '') {
      setTextLang({ value: 'eng', label: 'English' });
    }

    setProgressHidden(false);

    Tesseract.recognize(imageFile, textLang.value, {
      logger: (m) => {
        console.log(m);
        setProgress({
          progress: Math.round(m.progress * 100),
          status: m.status,
        });
      },
    }).then(({ data: { text } }) => {
      setImageText(text);
    });
  };

  useEffect(() => {
    if (imageText !== '') saveQuery(imageURL, imageText, textLang, id);
  }, [imageText, imageURL, imageText, textLang, id]);

  return (
    <Layout>
      <MetaData title='Textify' />
      <div className='home'>
        <ImageForm
          convertImg={convertImg}
          setImageURL={setImageURL}
          imageURL={imageURL}
          setFileName={setFileName}
          imageFile={imageFile}
          setImageFile={setImageFile}
          fileName={fileName}
          setTextLang={setTextLang}
          textLang={textLang}
        />

        {!progressHidden && <ConvertProgress progress={progress} />}
      </div>
    </Layout>
  );
}

export default Home;

//Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
