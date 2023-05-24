import React, { memo } from 'react'
import NewsCard from './NewsCard'

function News({ news_list }) {
  return (
    <div className="grid gap-y-5 px-5 md:px-0">
      {news_list.map((news, idx) => (
        <NewsCard
          key={idx + news.title + news.description}
          {...news}
          date={news.date.substr(0, 10)}
        />
      ))}
    </div>
  )
}

export default memo(News)
