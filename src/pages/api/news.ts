import { client } from '@/lib/client';
import { NextApiRequest, NextApiResponse } from 'next';

export type PostType = {
  _type: string;
  title: string;
  slug: {
    _type: string;
    current: string;
  }
  image: string
};

export type Data = {
  posts: PostType[];
  total: number;
  error?: string
};

export default async function posts(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  const {start, end} = req.query;
  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).json({
      error: 'Data invalid',
      posts: [],
      total: 0
    })
  }

  const {posts, total} = await loadPosts(Number(start), Number(end));

  res.status(200).json({
    posts,
    total
  })
}

export async function loadPosts(start: number, end: number): Promise<Data> {
  const query = `
    {
      "posts": *[_type == "news"] | order(date desc)[${start}...${end}]
        {date, slug, image, title, body},
      "total": count(*[_type == "news"])
    }
  `;
  const { posts, total } = await client.fetch<Data>(query);

  return {
    posts,
       total,
  };
}
