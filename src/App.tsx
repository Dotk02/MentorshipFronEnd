import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './auth/login'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path= '/' element = {<Home/>}>  </Route>
      <Route path= '/Login' element = {<Login/>}>  </Route>

    </Routes>
    
  )
}

export default App
