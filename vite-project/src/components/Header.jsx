import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <nav>
            <Link to='/'>Главная </Link>
            <Link to='/about'>О вас </Link>
            <Link to='/registration'>Регистрация</Link>
        </nav>
        
    </header>
  )
}
