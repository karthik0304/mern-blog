import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'


function App() {
  return (
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/signin' element={<Signin/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/> 
      </Routes>
   </BrowserRouter>
  )
}

export default App
