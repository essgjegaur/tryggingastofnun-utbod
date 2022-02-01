import {useEffect, useLayoutEffect, useState} from 'react'
import type {AppProps} from 'next/app'
import Head from 'next/head'

import {AuthContext} from '../services'
import '../styles/globals.css'
import Header from '../components/Header/Header'
import {Login} from '../scenes'

function MyApp({Component, pageProps}: AppProps) {
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(Boolean(token))
    setToken(token)
  }, [])

  const [_, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState<any>()

  const login = (mobileNumber: string) => {
    setToken(mobileNumber)
    setIsAuthenticated(true)
    localStorage.setItem('token', mobileNumber)
  }

  const logout = () => {
    setToken(null)
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }

  const updateLoadingState = (isLoading: boolean) => {
    setLoading(isLoading)
  }
  return (
    <AuthContext.Provider value={{token, isAuthenticated, login, logout, updateLoadingState}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isAuthenticated ? <Component {...pageProps} /> : <Login />}
    </AuthContext.Provider>
  )
}

export default MyApp
