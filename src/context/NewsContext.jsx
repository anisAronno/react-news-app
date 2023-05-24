import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import getNews from '../helper/getNews'
import { useUser } from './UserContext'

const NewsContext = createContext([])

export function useNews() {
  return useContext(NewsContext)
}

export default function NewsProvider({ children }) {
  const [news_list, setNews_list] = useState([])
  const { user } = useUser()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const config = {
      baseURL: 'http://backend-laravel-api.test',
      method: 'get',
      url: '/api/news',
      headers: {},
    }

    if (user) {
      config.url = '/api/user-news'
      config.headers.Authorization = `Bearer ${user.auth}`
    }

    setLoading(true)
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
        alert(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [user])

  return news_list ? (
    <NewsContext.Provider value={{ news: news_list, loading }}>
      {children}
    </NewsContext.Provider>
  ) : (
    ''
  )
}
