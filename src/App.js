import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import CulturaPage from './pages/CulturaPage';
import ProductPage from './pages/ProductPage';
import VredObPage from './pages/VredObPage';

function App() {
  return (
<section>
  <Header/>
  <Routes>
    <Route path={'/'} element={<MainPage/>}/>
    <Route path='/category/product' element={<ProductPage/>}/>
        <Route path='/category/cultura' element={<CulturaPage/>}/>
        <Route path='/category/vred_ob' element={<VredObPage/>}/>
  </Routes>
  <Footer/>
</section>
  );
}

export default App;
