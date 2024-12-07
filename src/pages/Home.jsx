import React from 'react'

import { useLoaderData } from 'react-router-dom'
import PopularProducts from '../components/PopularProducts'

const Home = () => {

  
  return (
    <div>
        <PopularProducts></PopularProducts>
    </div>
  )
}

export default Home