import { client } from '@/lib/client';
import Article from '@/components/Article/Article';

// @ts-ignore
const Description = ({ post }) => {
  console.log(post);
  return <Article>

  </Article>;
};

export default Description;

export async function getStaticPaths() {
  const query = `*[type == "news"] {
  slug {
  current
    }
  }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post: any) => ({
    params: {
      slug: post.current.slug,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

// @ts-ignore
export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "news" && slug.current == "${slug}"][0]`;
  console.log('query', query);

  const post = await client.fetch(query);
  console.log('post', post);
  return {
    props: {
      post,
    },
  };
}
