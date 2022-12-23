import React, { useState } from 'react'

import axiosInstance from '../utils/axios'
import Endpoint from '../configs/endpoint'

const Login = () => {
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: ''
  })

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const response = await axiosInstance.post(Endpoint.getLogin(), credentials)
      const data = response?.data?.data
      const token = data?.token
      !!token ? localStorage.setItem('x_travel', token) : null
    } catch (error) {
      console.log('error', error?.response)
    }
  }

  const credentialsHandler = (e) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col p-4 bg-orange-100 font-sans font-medium">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-username">
                Username
              </label>
              <input onChange={credentialsHandler} name="identifier" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" type="text" placeholder="Username" />

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Password
              </label>
              <input onChange={credentialsHandler} name="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />

              <div className="flex flex-row-reverse mt-2">
                <button onClick={submitHandler} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login