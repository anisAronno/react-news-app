import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import getNews from '../assets/helper/getNews'
import { useUser } from './UserContext'

const NewsContext = createContext([])

export function useNews() {
  return useContext(NewsContext)
}

export default function NewsProvider({ children }) {
  const [news_list, setNews_list] = useState([])
  const {user} = useUser()

  useEffect(() => {
    const logged_in = '/api/user-news'
    const logged_out = '/api/news'
    const base_url = 'https://admin.snmleathers.com'

    const config = {
      method: 'get',
      url: base_url + (user ? logged_in : logged_out),
      headers: {
        Authorization: user?.auth || '',
      },
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
        alert(err.message)
      })
  }, [user])

  return news_list ? (
    <NewsContext.Provider value={news_list}>{children}</NewsContext.Provider>
  ) : (
    ''
  )
}
