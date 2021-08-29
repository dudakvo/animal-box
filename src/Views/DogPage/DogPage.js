import { useEffect, useState } from 'react';
import Dog from '../../Components/Dog';
import { DOG_UPDATE_INTERVAL } from '../../helpers/constants';
import { handleImgDog } from '../../services/get-url';

export default function DogPage() {
  const [imgDog, setImgDog] = useState({});

  useEffect(() => {
    handleImgDog(setImgDog);
    const dogItmerID = setInterval(() => {
      handleImgDog(setImgDog);
    }, DOG_UPDATE_INTERVAL);
    return () => {
      clearInterval(dogItmerID);
    };
  }, []);

  return (
    <div>
      <Dog img={imgDog} />
    </div>
  );
}
