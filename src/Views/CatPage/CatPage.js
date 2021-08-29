import { useEffect, useState } from 'react';

import Cat from '../../Components/Cat';

import { handleImgCat } from '../../services/get-url.js';
import { CAT_UPDATE_INTERVAL } from '../../helpers/constants.js';

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
    <div>
      <h1>Cat page</h1>
      <Cat img={imgCat} />
    </div>
  );
}
