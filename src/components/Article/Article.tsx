import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Article = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Article;
