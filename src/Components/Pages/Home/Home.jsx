import React from 'react'
import SneakerCard from '../../SneakerCard/SneakerCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { getAllSneakers } from '../../Services/sneakers.js'

function Home() {

  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    const fetchSneakers = async () => {
      let resp = await axios.get('https://raregems-app.herokuapp.com/sneakers')
      let sneakers = resp.data
      setSneakers(sneakers)
    }
    fetchSneakers()
  }, [])

  return (
    <div>
      <SneakerCard sneakers={sneakers} />
    </div>
  )
}

export default Home