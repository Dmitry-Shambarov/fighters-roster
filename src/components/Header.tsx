import Link from 'next/link';
import s from '../styles/header.module.scss';

const Header = () => {
  return (
    <div>
      <nav className={s.nav}>
        <Link href="tournaments" className={s.link}>
          {' '}
          Tournaments{' '}
        </Link>
        <Link href="about" className={s.link}>
          About{' '}
        </Link>
        <Link href="rating" className={s.link}>
          {' '}
          Rating
        </Link>
        <Link href="fighters" className={s.link}>
          {' '}
          Fighters
        </Link>
      </nav>
    </div>
  );
};

export default Header;
