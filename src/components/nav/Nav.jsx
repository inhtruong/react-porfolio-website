/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import './nav.css'

const Nav = () => {
  const [active, setActive] = useState("#");
  
  return (
    <nav>
      <a 
        href="#" 
        className={active === "#" ? 'active' : ''}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a 
        href="#about"
        className={active === "#about" ? 'active' : ''}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser/>
      </a>
      <a 
        href="#experience"
        className={active === "#experience" ? 'active' : ''}
        onClick={() => setActive("#experience")}
      >
        <BiBook/>
      </a>
      <a 
        href="#services"
        className={active === "#services" ? 'active' : ''}
        onClick={() => setActive("#services")}
      >
        <RiServiceLine/>
      </a>
      <a 
        href="#contact"
        className={active === "#contact" ? 'active' : ''}
        onClick={() => setActive("#contact")}
      >
        <BiMessageSquareDetail/>
      </a>
    </nav>
  )
}

export default Nav