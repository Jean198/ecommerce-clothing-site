import './App.css';
import Home from './pages/home/Home'
import NavigationBar from './components/NavigationBar/NavigationBar';
import {Routes, Route} from 'react-router-dom'

function App() {
  
  
  return (
    

      <Routes>
          <Route path="/" element={<NavigationBar/>}>

            <Route index element={<Home/>}/>

          </Route>
      </Routes>
      
       
         
      )
}
export default App;
