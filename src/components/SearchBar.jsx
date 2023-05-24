import React, { useState } from 'react'
import { useLocation } from 'wouter'

export default function SearchBar() {
  const [value, setValue] = useState('')
  const [_, navigate] = useLocation()
  const handleValue = (e) => setValue(e.target.value)
  const handleSubmit = () => {
    const key = value.trim()
    if (key) {
      navigate(`/search/${key}`)
    }
  }

  return (
    <form className="relative bg-black" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What kind of news?"
        className="px-4 pr-10 py-1 rounded-md focus:outline-none w-56 sm:w-auto"
        value={value}
        onChange={handleValue}
      />
      <button
        className="absolute inset-y-0 right-0 px-2 text-gray-600 hover:text-gray-800 rounded-r-md"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  )
}
