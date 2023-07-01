import NavBar from "./Components/NavBar"
import Contacto from './Pages/Contacto'
import Entrenamientos from './Pages/Entrenamientos'
import Horarios from './Pages/Horarios'
import Inicio from './Pages/Inicio'
import Quienes from './Pages/Quienes'
import SumateHoy from './Pages/SumateHoy'
import './Styles/app.css'
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, 
        Routes, 
        Route } 
        from 'react-router-dom'; 

function App() {
  return (
    <div className="contenidoApp1"> 
      <BrowserRouter>         
        <NavBar />              
       
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/entrenamientos' element={<Entrenamientos />} />
            <Route path='/sumatehoy' element={<SumateHoy />} />
            <Route path='/horarios' element={<Horarios />} />
            <Route path='/quienessomos' element={<Quienes />} />
            <Route path='/contacto' element={<Contacto />} />
        </Routes>
       
      </BrowserRouter>  
      <Footer />
      </div>      
    );
}

export default App;
