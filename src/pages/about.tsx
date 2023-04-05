import s from '../styles/about.module.scss';
import Header from '@/components/Header';

const About = () => {
  return (
    <div>
      <Header />
      <h1 className={s.title}>about</h1>
    </div>
  );
};

export default About;
