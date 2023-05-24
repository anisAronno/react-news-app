export default function getNews(news_list) {
  return news_list.map((news) => {
    return {
      title: news.title,
      description: news.content,
      img_url: news.urlToImage,
      date: news.publishedAt.substr(0,10),
      source_link: news.url,
      source_name: news.source.name,
      author: news.author || news.source.name,
    }
  })
}
