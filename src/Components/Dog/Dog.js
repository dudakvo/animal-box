import s from './Dog.module.css';

export default function Dog(props) {
  const { img } = props;
  return (
    <div className={s.imgModule}>
      <img src={img.url} alt={img.tags} />
    </div>
  );
}
