import { clientConfig } from '@/lib/client';
import BlockContent from '@sanity/block-content-to-react';
import s from './Content.module.scss';

interface IProps {
  body: any;
}

const Content = ({ body }: IProps) => {
  return (
    <div className={s.content}>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
