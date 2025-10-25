import React from 'react'
import { Link, useLocation } from 'react-router'
import { TbBriefcase, TbBubbleText, TbHome, TbSettings, TbWorld, TbTicket } from 'react-icons/tb'

import './Tabs.css'

export default function Tabs() {

  const location = useLocation()

  const path = location.pathname.split('/')[1]

  return (
    <div className='Tabs__container'>
      <div className='Tabs__list'>

        <Link to="/community" className={`Tabs__item ${path === 'community' ? 'checked' : ''}`} >
          <TbWorld className='Tabs__item--icon' />
          <p className='Tabs__item--text'>Topluluk</p>
        </Link>

        <Link to="/housing" className={`Tabs__item ${path === 'housing' ? 'checked' : ''}`}>
          <TbHome className='Tabs__item--icon' />
          <p className='Tabs__item--text'>Konut</p>
        </Link>

        <Link to="/jobs" className={`Tabs__item ${path === 'jobs' ? 'checked' : ''}`}>
          <TbBriefcase className='Tabs__item--icon' />
          <p className='Tabs__item--text'>İş İlanları</p>
        </Link>

        <Link to="/services" className={`Tabs__item ${path === 'services' ? 'checked' : ''}`}>
          <TbSettings className='Tabs__item--icon' />
          <p className='Tabs__item--text'>Hizmetler</p>
        </Link>

        <Link to="/for-sale" className={`Tabs__item ${path === 'for-sale' ? 'checked' : ''}`}>
          <TbTicket className='Tabs__item--icon' />
          <p className='Tabs__item--text'>Satılık</p>
        </Link>

        <Link to="/forums" className={`Tabs__item ${path === 'forums' ? 'checked' : ''}`}>
          <TbBubbleText className='Tabs__item--icon' />
          <p className='Tabs__item--text'>Forumlar</p>
        </Link>

      </div>
    </div>
  )
}
