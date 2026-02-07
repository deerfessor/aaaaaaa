import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <nav>
            <Link to='/'>Главная </Link>
            <Link to='/about'>О вас</Link>
        </nav>
        
    </footer>
  )
}
