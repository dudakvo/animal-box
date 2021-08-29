import { useState, useEffect } from 'react';

import Cat from '../../Components/Cat';
import Dog from '../../Components/Dog';
import Fox from '../../Components/Fox';

import s from './HomePage.module.css';

import {
  handleImgCat,
  handleImgDog,
  handleImgFox,
} from '../../services/get-url.js';
import {
  CAT_UPDATE_INTERVAL,
  DOG_UPDATE_INTERVAL,
  FOX_UPDATE_INTRVAL,
} from '../../helpers/constants';

export default function HomePage() {
  const [imgCat, setImgCat] = useState({});
  const [imgDog, setImgDog] = useState({});
  const [imgFox, setImgFox] = useState({});

  useEffect(() => {
    handleImgCat(setImgCat);
    const catTimerID = setInterval(() => {
      handleImgCat(setImgCat);
    }, CAT_UPDATE_INTERVAL);
    return () => {
      clearInterval(catTimerID);
    };
  }, []);

  useEffect(() => {
    handleImgDog(setImgDog);
    const dogItmerID = setInterval(() => {
      handleImgDog(setImgDog);
    }, DOG_UPDATE_INTERVAL);
    return () => {
      clearInterval(dogItmerID);
    };
  }, []);

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
    <>
      <ul className={s.image_list}>
        <li className={s.imgModule}>
          <Cat img={imgCat} />
        </li>
        <li>
          <Dog img={imgDog} />
        </li>
        <li>
          <Fox img={imgFox} />
        </li>
      </ul>
    </>
  );
}
