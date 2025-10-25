import React, { useState } from 'react'
import { useLocation } from 'react-router'
import './Content.css'
import { craigslistCategories } from '../../../public/categories'
import imgNotFound from '../../../public/not-found.png'

export default function Content() {
  const [loadFull, setLoadFull] = useState(false)
  const location = useLocation()

  const path = location.pathname.split('/')[1] || 'topluluk'
  const categories = craigslistCategories[path]

  if (!categories) {
    return (
      <div className='Content__container'>
        <h2 className='Content__heading'>Kategori Bulunamadı</h2>
        <p>Aradığınız "{path}" kategorisi mevcut değil.</p>
      </div>
    )
  }

  const visibleCategories = loadFull ? categories : categories.slice(0, 8)
  const showLoadMoreButton = !loadFull && categories.length > 8

  return (
    <div className='Content__container'>
      <h2 className='Content__heading'>{path}</h2>

      <div className='Content__cards'>
        {visibleCategories.map((category, index) => (
          <div className='Content__card' key={index}>
            <div className='Content__card--photo-wrapper'>
              <img
                alt={category.name}
                src={category.path !== '#' ? category.path : imgNotFound}
                className='Content__card--photo'
              />
            </div>
            <h4 className='Content__card--title'>{category.name}</h4>
          </div>
        ))}
      </div>

      {
        showLoadMoreButton ? (
          <button
            type='button'
            className='Content__load-more-btn'
            onClick={() => setLoadFull(true)}
          >
            Hepsini Göster
          </button>
        )
          :
          (
            <button
              type='button'
              className='Content__load-more-btn'
              onClick={() => setLoadFull(false)}
            >
              Daha Az Göster
            </button>
          )
      }
    </div>
  )
}