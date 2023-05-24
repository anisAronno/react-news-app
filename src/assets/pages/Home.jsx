import React, { useEffect } from 'react'
import News from '../components/News'
import { useNews } from '../../context/NewsContext'
import { useUser } from '../../context/UserContext'
import Cookies from 'js-cookie'
import axios from 'axios'

export default function Home() {
  const { setUser } = useUser()
  const news = useNews()

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      const endpoint = 'https://admin.snmleathers.com/api/user'
      const headers = {
        Authorization: 'Bearer ' + token,
      }
      axios
        .get(endpoint, { headers })
        .then((res) => {
          if (res.status === 200) {
            const { data } = res.data
            data.auth = headers.Authorization
            setUser(data)
          }
        })
        .catch((err) => {
          Cookies.remove('token')
        })
    }
  }, [])

  return (
    <div className="pt-24 md:pt-20 pb-10  grid place-content-center">
      <News news_list={news} />
    </div>
  )
}
