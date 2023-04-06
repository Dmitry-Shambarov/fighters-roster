import s from '../styles/tournaments.module.scss';
import Header from '@/components/Header';

const Tournaments = () => {
  return (
    <div>
      <Header />
      <h1 className={s.title}>tournaments</h1>
    </div>
  );
};

export default Tournaments;
