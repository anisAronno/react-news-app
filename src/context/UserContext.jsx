import axios from 'axios'
import Cookies from 'js-cookie'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export function useUser() {
  return useContext(UserContext)
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      const config = {
        url: 'http://backend-laravel-api.test/api/user',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      axios
        .request(config)
        .then((res) => {
          if (res.status === 200) {
            const { data } = res.data
            data.auth = token
            setUser(data)
          }
        })
        .catch((err) => {
          alert(err.response.data.message)
          Cookies.remove('token')
        })
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
