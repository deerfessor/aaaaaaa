
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='w-full'>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <Link to='/'>Главная </Link>
            <Link to='/about'>О вас </Link>
            <Link to='/registration'>Регистрация</Link>
        </nav>
        
    </header>
  )
}

