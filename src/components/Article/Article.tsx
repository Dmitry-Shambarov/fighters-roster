import React, { ReactNode } from 'react';
import s from './Article.module.scss';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

type Props = {
  children: ReactNode;
  backUrl: string;
};

const Article = ({ children, backUrl }: Props) => {
  return (
    <article className={s.article}>
      <Link href={backUrl}>
        <AiOutlineArrowLeft className={s.Back} />
      </Link>
      {children}
    </article>
  );
};

export default Article;
