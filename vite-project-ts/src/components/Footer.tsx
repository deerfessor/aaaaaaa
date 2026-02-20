    
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <nav className="flex  justify-between flex-wrap bg-teal-500 p-6">
        <Link to="/">Главная </Link>
        <Link to="/about">О вас</Link>
      </nav>
    </footer>
  );
};
