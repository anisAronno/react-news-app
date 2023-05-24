import React from 'react'

export default function Preference(props) {
  const prep = props?.user?.preferences
  const authors = prep
    .map((prep_obj) => prep_obj.authors)
    .filter((author) => author != null)
  const categories = prep
    .map((prep_obj) => prep_obj.categories)
    .filter((cat) => cat != null)
  const sources = prep
    .map((prep_obj) => prep_obj.sources)
    .filter((src) => src != null)

  return (
    <div>
      <div className="max-w-full">
        <span className="flex flex-wrap">Source:</span>
        {sources.map((src) => (
          <span className="block">
            <span className="rounded-lg m-2 bg-gray-200 px-1.5 py-1  inline-block text-sm">
              {src}
              <span className="text-red-600 cursor-pointer p-1">x</span>
            </span>
          </span>
        ))}
        <span className="rounded-md m-2 bg-gray-200 px-1.5 py-1  inline-block text-sm">
          <input type="text" className="w-full" value={''} />
        </span>
      </div>
      <div className="flex flex-wrap">
        <span className="pr-2">Authors:</span>
        {authors.map((authors) => (
          <span className="block w-full">
            <span className="rounded-lg m-2 bg-gray-200 px-1.5 py-1  inline-block text-sm">
              {authors}
              <span className="text-red-600 cursor-pointer p-1">x</span>
            </span>
          </span>
        ))}
        <span className="rounded-md m-2 bg-gray-200 px-1.5 py-1  inline-block text-sm">
          <input type="text" className="w-full" value={''} />
        </span>
      </div>
      <div className="flex flex-wrap">
        <span>Categories:</span>
        {categories.map((cat) => (
          <span className="block w-full">
          <span className="rounded-lg m-2 bg-gray-200 px-1.5 py-1  inline-block text-sm">
            {cat}
            <span className="text-red-600 cursor-pointer p-1">x</span>
          </span>
        </span>
        ))}
        <span className="rounded-md m-2 bg-gray-200 px-1.5 py-1  inline-block text-sm">
          <input type="text" className="w-full" value={''} />
        </span>
      </div>
    </div>
  )
}
