import { useOutletContext } from 'react-router-dom';
import s from './Features.module.css';
import PropertyIcons from '../PropertyIcons/PropertyIcons';
const Features = () => {
  const { camper } = useOutletContext();
  return (
    <div className={s.features}>
      <div className={s.icons}>
        <PropertyIcons camper={camper} />
      </div>
      <ul className={s.info}>
        <p className={s.title}>Vehicle details</p>
        <hr className={s.line} />
        <li className={s.item}>
          <p className={s.text}>form</p>
          <p className={s.text}>{camper?.form}</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>length</p>
          <p className={s.text}>{camper?.length}</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>width</p>
          <p className={s.text}>{camper?.width}</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>height</p>
          <p className={s.text}>{camper?.height}</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>tank</p>
          <p className={s.text}>{camper?.tank}</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>consumption</p>
          <p className={s.text}>{camper?.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
