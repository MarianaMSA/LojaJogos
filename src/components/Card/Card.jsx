import React, { useState} from 'react'
import "./Card.css"
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Card = ( props ) => {
    const [favorito, setFavorito] = useState(false)

    const navigate = useNavigate();

    const goToGamePage = () => {
      navigate('/game', { state: props.id })
    }
  
    const wishGame = async () => {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }
      const id = props.id;
  
      axios.get(`/game/wish/${id}`, config)
    }

    const FaHear = () => {
      setFavorito(!favorito)
      wishGame()
    }

   return (
        <div className="card card-container">
            <img onClick={goToGamePage} src={props.image} alt={props.nome} />
            <div className="favo">
                <span>{props.nome}</span>
            </div>
            <div className='ano'>
                <span>R${props.price}</span>
                <FaHeart onClick={FaHear} className={`favorito ${favorito ? "sim" : ""}`}/>
            </div>
        </div> 
    )
}

export default Card
