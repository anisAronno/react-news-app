import React from 'react'
import NewsCard from './NewsCard'

export default function News({ news_list }) {
  return (
    <div className="grid gap-y-5 px-5 md:px-0">
      {news_list.map((news, idx) => (
        <NewsCard {...news} key={idx + news.title + news.description} />
      ))}
    </div>
  )
}
