import { client } from '@/lib/client';
import Article from '@/components/Article/Article';
import Content from '@/components/Content/Content';
import s from './styles.module.scss';
import { PostType } from '@/pages/api/news';

interface IPost {
  slug: { current: string };
}

const Description = ({ post }: { post: PostType }) => {
  return (
    <Article backUrl="/">
      <h2 className={s.title}>{post.title}</h2>
      <Content body={post.body} />
    </Article>
  );
};

export default Description;

export async function getStaticPaths() {
  const query = `*[_type == "news"] { slug { current } }`;
  const posts = await client.fetch(query);
  const paths = posts.map((post: any) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const query = `*[_type == "news"]`;
  const posts = await client.fetch(query);
  const post = posts.find((post: IPost) => post.slug.current === params.slug) || null;
  return { props: { post } };
}
