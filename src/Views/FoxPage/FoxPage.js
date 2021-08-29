import { useState, useEffect } from 'react';

import Fox from '../../Components/Fox';
import { handleImgFox } from '../../services/get-url';
import { FOX_UPDATE_INTRVAL } from '../../helpers/constants';

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
    <div>
      <Fox img={imgFox} />
    </div>
  );
}
