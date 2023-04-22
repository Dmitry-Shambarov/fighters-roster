import { PostType } from '@/pages/api/news';
import Link from 'next/link';
import { urlFor } from '@/lib/client';
import s from './Post.module.scss';
import PostGrid from '@/components/PostGrid/PostGrid';


const Post = (props: PostType) => {

  return (
    <PostGrid>
      <Link href={`/post/${encodeURIComponent(props.slug.current)}`}>
        <div className={s.post}>
          <div className={s.postContent}>
            <div className={s.postTitle}>{props.title}</div>
              <img src={urlFor(props.image).url()} className={s.postImage} />
          </div>
        </div>
      </Link>
    </PostGrid>
  );

};

export default Post;