import React from 'react'

const AuthContext = React.createContext({
  token: '' as string | null,
  isAuthenticated: false,
  logout: () => {},
  login: (_: string) => {},
  updateLoadingState: (_: boolean) => {},
})

export default AuthContext
