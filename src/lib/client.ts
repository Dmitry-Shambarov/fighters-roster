import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export type ClientConfig = {
  projectId: string;
  dataset: string;
};

export const clientConfig: ClientConfig = {
  projectId: 'tacs9sgy',
  dataset: 'production',
};

export const client = createClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  useCdn: true,
  apiVersion: '2023-04-12',
  token: process.env.SANITY_SECRET_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
