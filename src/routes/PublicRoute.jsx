import React from 'react'
import { Redirect } from 'wouter'
import { useUser } from '../context/UserContext'

export default function PublicRoute({ children }) {
  const { user } = useUser()

  return user ? <Redirect to="/" replace /> : <>{children}</>
}
