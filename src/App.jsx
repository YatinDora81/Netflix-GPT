import React from 'react'
import Body from './Components/Body'
import Store from './Redux/Store'
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className=' w-full h-screen'>
      <Provider store={Store}>
      <Body></Body>
      </Provider>
    </div>
  )
}

export default App
