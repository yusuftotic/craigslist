import React from 'react'

import { NavLink } from 'react-router';

import { TbList, TbCardsFilled, TbPlus } from "react-icons/tb";

import './Nav.css'

export default function Nav() {


  return (
    <nav className='Nav'>

      <div className='Nav__container'>

        <div className='Nav__logo'>Lexibase</div>

        <ul className='Nav__links'>

          <li className='Nav__item'>
            <NavLink to="/wordlist" className='Nav__link'><TbList className='Nav__icon' />My Word List</NavLink>
          </li>

          <li className='Nav__item'>
            <NavLink to="/flashcards" className='Nav__link'><TbCardsFilled className='Nav__icon' />Flashcards</NavLink>
          </li>

          <li className='Nav__item'>
            <NavLink to="/addword" className='Nav__link'><TbPlus className='Nav__icon' />Add Word</NavLink>
          </li>

        </ul>

        <div className='ProfilePhoto__container'>
          <img alt='pp' rel='' src='https://images.pexels.com/photos/18398360/pexels-photo-18398360.jpeg' />
        </div>

      </div>

    </nav>
  )
}
