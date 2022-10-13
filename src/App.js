import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar} from './components/NavBar/NavBar';
import { TopBar } from './components/NavBar/TopNav/TopNav';
import { ProdListContainer } from './components/ProdListContainer/ProdListContainer'
import { ContactPage } from './components/ContactPage/ContactPage';
import { useParams } from 'react-router-dom';
//import { ProductDetailContainer } from './components/ProductDetailContainer/ProductDetailContainer'
import { ProductDetail } from './components/ProductDetail/ProductDetail'

function App() {
  console.log(useParams());
  return (
    <BrowserRouter>
      <div className='App'>
        <TopBar/>
          <header className="App-header">
      
            <NavBar/>
              
          </header>
          <Routes>  
                <Route path="/" element={<ProdListContainer/>}/>
                <Route exact path="/category/:categoryId" element={<ProdListContainer/>}/>
                <Route path='=/product/:id' element={<ProductDetail/>}/>
               
                <Route path="/contacto" element={<ContactPage/>}/>
              </Routes>
       
          <footer>
            derechos reservados
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
