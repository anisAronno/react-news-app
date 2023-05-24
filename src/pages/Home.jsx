import React from 'react'
import News from '../components/News'
import Preference from '../components/Preference'
import { useNews } from '../context/NewsContext'
import { useUser } from '../context/UserContext'
import Loader from '../components/Loader'

export default function Home() {
  const { news, loading } = useNews()
  const { user } = useUser()

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-6 pt-24 md:pt-20 pb-10">
          <div className="col-span-1"></div>
          <div className="  grid col-span-4 place-content-center">
            {<News news_list={news} />}
          </div>
          <div className="col-span-1">{user ? <Preference  user={user} /> : ''}</div>
        </div>
      )}
    </>
  )
}
