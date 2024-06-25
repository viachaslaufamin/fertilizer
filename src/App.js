import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import sacd from '..//src/'

function App() {
  return (
<section>
  <Header/>
  <Routes>
    <Route path={'/'} element={<MainPage/>}/>
  </Routes>
  <Footer/>
</section>
  );
}

export default App;
