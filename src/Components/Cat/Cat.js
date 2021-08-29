import s from './Cat.module.css';

export default function Cat(props) {
  const { img } = props;
  return (
    <div className={s.imgModule}>
      <img
        src={`https://cataas.com${img.url}`}
        alt={img.tags}
        object-fit="contain"
      />
    </div>
  );
}
