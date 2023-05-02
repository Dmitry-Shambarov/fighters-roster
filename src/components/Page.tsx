import Header from '@/components/Header';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Page = ({ children }: Props) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};
