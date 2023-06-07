import { PostType } from '@/pages/api/news';
import Link from 'next/link';
import { urlFor } from '@/lib/client';
import s from './Post.module.scss';

const Post = ({ slug, title, image }: PostType) => {
  return (
    <Link href={`/post/${encodeURIComponent(slug.current)}`} className={s.link}>
      <div className={s.post}>
        <div className={s.content}>
          <h3 className={s.title}>{title}</h3>
          <img src={urlFor(image).url()} className={s.image} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Post;
