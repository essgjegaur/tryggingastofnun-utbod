import React, {useContext, useEffect, useState} from 'react'

import {Box, Text, LinkContext, Link} from '@island.is/ui'

import {Login, Home} from '../scenes'

import {AuthContext} from '../services'

export default function App() {
  const context = useContext(AuthContext)
  return context.isAuthenticated ? <Home /> : <Login />
}
