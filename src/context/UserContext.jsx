import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const UserContext = createContext({})

export function useUser() {
  return useContext(UserContext)
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const payload = useMemo(() => ({ user, setUser }), [user])

  return <UserContext.Provider value={payload}>{children}</UserContext.Provider>
}
