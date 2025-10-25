import { useState } from 'react'

import './Search.css'
import { TbChevronDown, TbFilter, TbLocation, TbSearch } from 'react-icons/tb'

export default function Search() {

  const [query, setQuery] = useState('')


  return (
    <div className='Search__container'>

      <div className='Search__bar'>
        {/* <TbSearch /> */}
        <input
          className='Search__bar--input'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Ne arıyorsunuz?'
        />

        <div className='Search__country'>
          <TbLocation className='Search__country--icon' />
          Türkiye
          <TbChevronDown className='Search__country--icon' />
        </div>

        <div className='Search__bar--divider'></div>

        <div className='Search__filter'>
          <TbFilter className='Search__filter--icon' />
          Filter
        </div>
      </div>

    <button type="button" className='Search__submit'><TbSearch className='Search__submit--icon' /> Search</button>

    </div>
  )
}
