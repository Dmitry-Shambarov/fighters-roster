import s from '../styles/fighters.module.scss';
import Header from '@/components/Header';

const Fighters = () => {
  return (
    <div>
      <Header />
      <h1 className={s.title}>fighters</h1>
    </div>
  );
};

export default Fighters;
