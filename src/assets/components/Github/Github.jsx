import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers
    <img src="/manvi.jpg" alt="Git picture" width={300} />

    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://github.com/Manvibhandari/Currency-Project/blob/main/Currency.js')
    return response.json()
}