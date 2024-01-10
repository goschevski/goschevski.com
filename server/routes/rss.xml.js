import { toHtml } from 'hast-util-to-html'
import { serverQueryContent } from '#content/server'
import { Feed } from 'feed';

const recursivelyPatchChildren = (node) => {
  if (node.type === 'text') {
    return node;
  } else if (node.tag === 'code' && node.props.language) {
    node.props.lang = node.props.language;
    node.children = [
      {
        type: 'text',
        value: node.props.code
      }
    ];
    delete node.props.language;
    delete node.props.code;
  }

  node.tagName = node.tag;
  node.properties = node.props;
  node.children = node.children.map(recursivelyPatchChildren);

  return node;
}

export default defineEventHandler(async (event) => {
  const feed = new Feed({
    title: 'Aleksandar Goševski - software engineer',
    description: 'Thoughts about web development, programming, devops, tools, design, etc.',
    copyright: 'All rights reserved © Aleksandar Goševski',
    language: 'en',
    link: 'https://www.goschevski.com'
  })

  const articles = await serverQueryContent(event).sort({ createdAt: -1 }).find()

  for (const article of articles) {
    article.body.children = article.body.children.map(recursivelyPatchChildren);

    feed.addItem({
      title: article.title ?? '-',
      content: toHtml(article.body),
      description: article.description,
      link: `https://www.goschevski.com${article._path}`,
      date: new Date(article.createdAt),
    })
  }

  event.res.setHeader('content-type', 'text/xml')
  event.res.end(feed.rss2())
})
