import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'wouter'
import { useUser } from '../../context/UserContext'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function Navbar() {
  const { user, setUser } = useUser()

  const handleLogout = () => {
    const token = Cookies.get('token')
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .post('https://admin.snmleathers.com/api/logout', null, { headers })
      .then((res) => {
        if (res.status === 200) {
          Cookies.remove('token')
          setUser(null)
        }
      })
      .catch((err) => {
        console.log(err)
        alert(err.response.data.message)
      })
  }

  return (
    <nav className="bg-gray-800 fixed inset-x-0 py-3 md:p-0">
      <div className="container mx-auto px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-16">
          <SearchBar />
          <div className="flex items-center">
            <div className="ml-4">
              {user ? (
                <a
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              ) : (
                <>
                  <Link href="/login">
                    <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">
                      Login
                    </a>
                  </Link>
                  <Link href="/signup">
                    <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">
                      Sign Up
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
