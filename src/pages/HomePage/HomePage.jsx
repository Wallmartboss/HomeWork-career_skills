import s from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={s.container}>
      <div>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link to="/catalog">
          <button>View Now</button>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
