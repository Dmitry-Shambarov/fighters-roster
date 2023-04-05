import s from '../styles/rating.module.scss';
import Header from '@/components/Header';

const Rating = () => {
  return (
    <div>
      <Header />
      <h1 className={s.title}>rating</h1>
    </div>
  );
};

export default Rating;
