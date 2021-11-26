import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Card.css"

const Game = () => {
    const state = useLocation()
    const id = state.state;
  
    const [game, setGame] = useState({})
    const [mounted, setMounted] = useState(false)
  
    const getData = async () => {
      await axios.get(`/game/find/${id}`)
      .then(response => {
        if(mounted) {
          setGame(response.data)
          console.log(game)
        }
      })
    }
  
    useEffect(() => {
      setMounted(true)
      getData()
    }, [mounted])

    return (
        <div className='container'>
          <div className='container-card'>
            <div className='container-card-img'>
                <img src={game.image} alt={game.name} srcset="" />
            </div>
            <div>
                <h2>{game.name}</h2>
                <span>R$ {game.price}</span>
            </div>
          </div>
        </div>
    )
}

export default Game
