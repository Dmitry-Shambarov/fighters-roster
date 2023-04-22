import { loadPosts, PostType } from '@/pages/api/news';
import { useState } from 'react';
import Post from '@/components/Post/Post';
import PostGrid from '@/components/PostGrid/PostGrid';

type HomePropsType = HomeProps & PostType

type HomeProps = {
  initialPosts: PostType[];
  total: number;
};

const LOAD_MORE_STEP = 4;

export default function Home(props: HomePropsType) {

  const [posts, setPosts] = useState(props.initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = props.total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true)

try {
      const data = await fetch(`/api/news?start=${loadedAmount}&end${loadedAmount + LOAD_MORE_STEP}`)
        .then( (response) => response.json() );
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP)
  setPosts([...posts, ...data.posts])
  setLoading(false)
} catch (error) {
  console.log(error);
  setLoading(false)
}

  };

  return (
    <>
      <PostGrid>
        {posts.map((post) => (
          <Post
            key={post.slug.current}
            title={post.title}
            _type={post._type}
            slug={post.slug}
            image={post.image}
          />
        ))}
      </PostGrid>
      {isLoadButton && (
        <div>
          <button
            onClick={getMorePosts}
                  disabled={loading}
          >
            Load more posts...
          </button>
        </div>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);

  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};


