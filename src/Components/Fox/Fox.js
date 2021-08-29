import s from './Fox.module.css';

export default function Fox(props) {
  const { img } = props;
  return (
    <div className={s.imgModule}>
      <img src={img.url} alt={img.tags} />
    </div>
  );
}
