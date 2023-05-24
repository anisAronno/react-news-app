import React, { useEffect, useState } from 'react'
import News from './News'
import axios from 'axios'
import { useLocation } from 'wouter'
import getNews from '../helper/getNews'

export default function Search(props) {
  let { keys } = props.params
  keys = decodeURI(keys)
  const [news, setNews] = useState([])
  const [_, navigate] = useLocation()

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://admin.snmleathers.com/api/news',
      params: {
        key: keys,
      },
    }
    axios
      .request(config)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data
          const { articles } = data
          const filtered = getNews(articles)
          setNews(filtered)
        }
      })
      .catch((err) => {
        console.log(err)
        alert(err?.response?.data?.message)
        navigate('/', { replace: true })
      })
  }, [])

  return (
    <div className="pt-24 md:pt-20 pb-10  grid place-content-center">
      <div className="pb-10">
        <h2 className="text-2xl font-bold text-gray-700 ">
          Showing result for: {keys}
        </h2>
      </div>

      <News news_list={news} />
    </div>
  )
}
