import { useState, useEffect } from 'react';

import Fox from '../../Components/Fox';
import { handleImgFox } from '../../services/get-url';
import { FOX_UPDATE_INTRVAL } from '../../helpers/constants';

import s from './FoxPage.module.css';

export default function FoxPage() {
  const [imgFox, setImgFox] = useState({});

  useEffect(() => {
    handleImgFox(setImgFox);
    const foxTimerID = setInterval(() => {
      handleImgFox(setImgFox);
    }, FOX_UPDATE_INTRVAL);
    return () => {
      clearInterval(foxTimerID);
    };
  }, []);

  return (
    <div className={s.page}>
      <Fox img={imgFox} />
    </div>
  );
}
