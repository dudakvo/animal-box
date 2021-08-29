import { useEffect, useState } from 'react';

import Cat from '../../Components/Cat';

import { handleImgCat } from '../../services/get-url.js';
import { CAT_UPDATE_INTERVAL } from '../../helpers/constants.js';

import s from './CatPage.module.css';

export default function CatPage() {
  const [imgCat, setImgCat] = useState({});

  useEffect(() => {
    handleImgCat(setImgCat);
    const catTimerID = setInterval(() => {
      handleImgCat(setImgCat);
    }, CAT_UPDATE_INTERVAL);
    return () => {
      clearInterval(catTimerID);
    };
  }, []);

  return (
    <div className={s.page}>
      <Cat img={imgCat} />
    </div>
  );
}
