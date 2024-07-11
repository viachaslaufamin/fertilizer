import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import logo from './image/logo/logo.svg'
import search from './image/search.svg'
import bgmenu from './image/bgmenu.svg'
import baner1 from './image/banner1.svg'
import baner2 from './image/banner2.svg'
import {Link} from 'react-router-dom'
import inst from './image/logo/inst.svg'
import youtube from './image/logo/youtube.svg'
import viber from './image/logo/viber.svg'
import EcoEarthNatureLogo from './image/EcoEarthNatureLogo.svg'
import Menu from '../Menu'


export default function Header() {
   const images = [
      `url(${baner1})`,
      `url(${baner2})`
   ]
   const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);
   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
   return (
   <header 
   style={{ backgroundImage: images[currentIndex], backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
   >
      <section className={s.header}>
         <div>
            <div>
               <Link to={'/'}><img src={logo} alt="logo" /></Link>
            </div>
            <div>
               <img src={search} alt="search" />
               <img onClick={toggleMenu}
               src={bgmenu} alt="bgmenu" />
               {isOpen && <Menu toggleMenu={toggleMenu}/>}
            </div>
         </div>
         <div>
            <div>
               <div>
                  <a href="#"><img src={inst} alt="inst" /></a>
                  <a href="#"><img src={youtube} alt="youtube" /></a>
                  <a href="#"><img src={viber} alt="viber" /></a>
               </div>
               <div>
                  <h2>ОПТОВАЯ ТОРГОВЛЯ СРЕДСТВАМИ ЗАЩИТЫ РАСТЕНИЙ</h2>
               </div>
            </div>
            <div className={s.broshura}>
               <div>
                  <p>Просмотреть брошюр</p>
                  <div>
                     <a href="">
                        <p>Открыть</p>
                     </a>
                  </div>
               </div>
               <div>
                  <img src={EcoEarthNatureLogo} alt="" />
               </div>
            </div>
         </div>
      </section>
    </header>
  )
}
