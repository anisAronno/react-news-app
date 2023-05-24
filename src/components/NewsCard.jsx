import React from 'react'

export default function NewsCard(props) {
  const { title, description, img_url, date, source_link, source_name, author } = props

  return (
    <div className="max-w-xl 2xl:max-w-3xl rounded overflow-hidden shadow-lg bg-gray-50 border border-solid border-gray-200">
      <img src={img_url} alt="news" className="h-48 w-full object-cover" />
      <div className="text-right">
        <span className="ml-auto inline-block text-sm pr-2">{date}</span>
      </div>
      <div className="px-6 py-0">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-6 py-4 flex flex-wrap justify-between">
        <div className="flex-1">
          <span className="inline-block px-3 py-1 text-xs font-medium text-gray-700 mr-2">
            Source: {source_name}
          </span>
          <span className="inline-block px-3 py-1 text-xs font-medium text-gray-700 mr-2">
            Author: {author}
          </span>
        </div>
        <div className="flex-none grid place-content-center">
          <a
            href={source_link}
            target="_blank"
            className="ml-4 cursor-pointer text-base rounded-md shadow-md px-2 py-1"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}
