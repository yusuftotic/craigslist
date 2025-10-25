import React from 'react'

import { NavLink } from 'react-router';

import { TbList, TbCardsFilled, TbPlus, TbHeart, TbChevronDown } from "react-icons/tb";

import './Nav.css'

export default function Nav() {


  return (
    <nav className='Nav'>

      <div className='Nav__container'>

        <div className='Nav__logo'>craigslist</div>

        <div className='Nav__group'>
          <ul className='Nav__links'>

            <li className='Nav__item'>
              <NavLink to="#" className='Nav__link'><TbHeart className='Nav__icon' />Favorites</NavLink>
            </li>

            <li className='Nav__item'>
              <NavLink to="#" className='Nav__action'><TbPlus className='Nav__icon' />İlan Ver</NavLink>
            </li>

            <li className='Nav__item'>
              <p className='Nav__lang'>Türkçe <TbChevronDown className='Nav__icon' /></p>
            </li>

          </ul>

          <div className='ProfilePhoto__container'>
            <img alt='pp' rel='' src='https://images.pexels.com/photos/18398360/pexels-photo-18398360.jpeg' />
          </div>
        </div>



      </div>

    </nav>
  )
}
