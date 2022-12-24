import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="h-screen font-sans">
        <div className="flex flex-col items-center justify-center h-full">
          <div className='text-center'>
            <h1 className="text-4xl font-bold">Home</h1>
            <p className="mt-4 text-gray-500">This is the home page.</p>
          </div>

          <div className="flex flex-col items-center justify-center mt-2">
            <Link to="/login">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home