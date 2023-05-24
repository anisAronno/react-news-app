import React from 'react'
import News from '../components/News'
import { useNews } from '../context/NewsContext'

export default function Home() {
  const news = useNews()

  return (
    <div className="pt-24 md:pt-20 pb-10  grid place-content-center">
      <News news_list={news} />
    </div>
  )
}
