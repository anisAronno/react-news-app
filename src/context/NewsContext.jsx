import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import getNews from '../helper/getNews'
import { useUser } from './UserContext'

const NewsContext = createContext([])

export function useNews() {
  return useContext(NewsContext)
}

export default function NewsProvider({ children }) {
  const [news_list, setNews_list] = useState([])
  const { user } = useUser()

  useEffect(() => {
    const config = {
      baseURL: 'https://admin.snmleathers.com',
      method: 'get',
      url: '/api/news',
      headers: {},
    }

    if (user) {
      config.url = '/api/user-news'
      config.headers.Authorization = `Bearer ${user.auth}`
    }

    axios
      .request(config)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data
          const { articles } = data
          const filtered = getNews(articles)
          setNews_list(filtered)
        }
      })
      .catch((err) => {
        console.dir(err)
        alert(err.message)
      })
  }, [user])

  return news_list ? (
    <NewsContext.Provider value={news_list}>{children}</NewsContext.Provider>
  ) : (
    ''
  )
}
