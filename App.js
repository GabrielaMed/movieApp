import { NavigationContainer } from '@react-navigation/native'
import { useState } from 'react'
import { Home } from './src/pages/Home'
import { Details } from './src/pages/Details'

export default function App() {
  const [globalState, setGlobalState] = useState({ page: 'home', movieId: 0 })

  return (
    <NavigationContainer>
      {globalState.page === 'home' && (
        <Home prop={{ globalState, setGlobalState }} />
      )}
      {globalState.page === 'detail' && (
        <Details prop={{ globalState, setGlobalState }} />
      )}
    </NavigationContainer>
  )
}
