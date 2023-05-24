import axios from 'axios'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useUser } from '../context/UserContext'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { setUser } = useUser()

  const onSubmit = ({ email, password }) => {
    const endpoint = 'https://admin.snmleathers.com/api/login'
    const params = {
      email,
      password,
    }

    axios
      .post(endpoint, null, { params })
      .then((res) => {
        if ((res.status === 200) | res?.data?.success) {
          const { data } = res.data
          const { token, user } = data
          user.auth = token
          Cookies.set('token', token)
          setUser(user)
        }
      })
      .catch((err) => {
        const { message } = err.response.data
        alert(message)
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Enter your email"
              {...register('email')}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
