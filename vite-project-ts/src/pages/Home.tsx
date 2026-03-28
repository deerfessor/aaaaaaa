import { Route, Routes } from "react-router-dom"
import { Offer } from "../components/Offer"

export const Home = () => {
  return (
    <div > 
      <h1 className="sm">Сайт обмена попитами</h1>
      <p className="italic">Сегодняшний курс : 3 к 1</p>

      <div className = "flex">
      <Offer title="Синий попит"/>
      <Offer title="Большой попит"/>
      </div>
      
    </div>
  )
}
