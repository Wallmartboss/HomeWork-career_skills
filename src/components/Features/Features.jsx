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
      <div className={s.info}>
        <p className={s.title}>Vehicle details</p>
        <hr className={s.line} />
        <div className={s.item}>
          <p className={s.text}>form</p>
          <p className={s.text}>{camper?.form}</p>
        </div>
        <div className={s.item}>
          <p className={s.text}>length</p>
          <p className={s.text}>{camper?.length}</p>
        </div>
        <div className={s.item}>
          <p className={s.text}>width</p>
          <p className={s.text}>{camper?.width}</p>
        </div>
        <div className={s.item}>
          <p className={s.text}>height</p>
          <p className={s.text}>{camper?.height}</p>
        </div>
        <div className={s.item}>
          <p className={s.text}>tank</p>
          <p className={s.text}>{camper?.tank}</p>
        </div>
        <div className={s.item}>
          <p className={s.text}>consumption</p>
          <p className={s.text}>{camper?.consumption}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
