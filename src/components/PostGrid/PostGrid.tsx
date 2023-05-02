import React, { ReactNode } from 'react';
import s from './PostGrid.module.scss'

type Props = {
  children: ReactNode;
};

const PostGrid = ({ children }: Props) => {
  return (
    <div className={s.postGrid}>
      {children}
    </div>
  );
};

export default PostGrid;