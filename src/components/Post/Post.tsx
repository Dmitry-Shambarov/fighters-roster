import { PostType } from '@/pages/api/news';
import Link from 'next/link';
import { urlFor } from '@/lib/client';
import s from './Post.module.scss';

const Post = (props: PostType) => {
  return (
    <Link href={`/post/${encodeURIComponent(props.slug.current)}`} className={s.link}>
      <div className={s.post}>
        <div className={s.content}>
          <h3 className={s.title}>{props.title}</h3>
          <img src={urlFor(props.image).url()} className={s.image} alt="picture" />
        </div>
      </div>
    </Link>
  );
};

export default Post;
