import rss from '@astrojs/rss';
import { pageTitle, pageDescription, domain } from '../consts';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.createdAt.valueOf() - a.data.createdAt.valueOf()
  );

  return rss({
    title: pageTitle,
    description: pageDescription,
    site: domain,
    copyright: 'All rights reserved © Aleksandar Goševski',
    language: 'en',
    link: domain,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `${domain}/${post.slug}`,
      pubDate: new Date(post.data.createdAt),
      content: `<![CDATA[ ${sanitizeHtml(parser.render(post.body))} ]]>`
    }))
  });
}
