import React from 'react'
import s from './index.module.css'
import closed from './img/close.svg'
import look_black from './img/look_black.svg'
import { Link } from 'react-router-dom'
import inst from './img/items/inst.svg'
import youtube from './img/items/youtube.svg'
import viber from './img/items/viber.svg'
import EcoEarthNatureLogo from './img/EcoEarthNatureLogo.svg'

export default function Menu({toggleMenu}) {
  return (
    <section className={s.menu}>
      <div>
         <div>
            <form className={s.form}>
               <input  type="text" placeholder="Введите поисковой запрос" />
            </form>
            <div>
               <img src={look_black} alt="look" />
               <img src={closed} onClick={toggleMenu} alt="closed" />
            </div>
         </div>
         <nav className={s.navig}>
            <div>
               <Link to={'/category'}>
                  <h2>Продукты</h2>
               </Link>
               <ul>
                  <Link>
                     <li>Обработка семян</li>
                  </Link>
                  <Link>
                     <li>Гербициды</li>
                  </Link>
                  <Link>
                     <li>Фунгициды</li>
                  </Link>
                  <Link>
                     <li>Инстектициды</li>
                  </Link>
                  <Link>
                     <li>Фумиганты</li>
                  </Link>
                  <Link>
                     <li>ПАВы и адъюванты</li>
                  </Link>
                  <Link>
                     <li>Микроудобрения</li>
                  </Link>
                  <Link>
                     <li>Регуляторы роста</li>
                  </Link>
               </ul>
            </div>
            <div>
               <Link>
                  <h2>Культуры</h2>
               </Link>
               <ul>
                  <Link>
                     <li>Озимые зерновые</li>
                  </Link>
                  <Link>
                     <li>Яровые зерновые</li>
                  </Link>
                  <Link>
                     <li>Картофель</li>
                  </Link>
                  <Link>
                     <li>Кукуруза</li>
                  </Link>
                  <Link>
                     <li>Подсолнечник</li>
                  </Link>
                  <Link>
                     <li>Рапс</li>
                  </Link>
                  <Link>
                     <li>Сахарная свёкла</li>
                  </Link>
                  <Link>
                     <li>Соя</li>
                  </Link>
                  <Link>
                     <li>Горох</li>
                  </Link>
                  <Link>
                     <li>Лён</li>
                  </Link>
               </ul>
            </div>
            <div>
               <Link>
                  <h2>О нас</h2>
               </Link>
               <ul>
                  <Link>
                     <li>Компания</li>
                  </Link>
                  <Link>
                     <li>Наука</li>
                  </Link>
                  <Link>
                     <li>Публикации</li>
                  </Link>
                  <Link>
                     <li>Видеоматериалы</li>
                  </Link>
                  <Link>
                     <li>Контакты</li>
                  </Link>
               </ul>
            </div>
            <div>
               <Link>
                  <h2>Вредные объекты</h2>
               </Link>
               <ul>
                  <Link>
                     <li>Сорняки</li>
                  </Link>
                  <Link>
                     <li>Болезни</li>
                  </Link>
                  <Link>
                     <li>Вредители</li>
                  </Link>
               </ul>
            </div>
            <div className={s.vizibol}>
               <div>
                  <a href="#"><img src={inst} alt="inst" /></a>
                  <a href="#"><img src={youtube} alt="youtube" /></a>
                  <a href="#"><img src={viber} alt="viber" /></a>
               </div>
               <div className={s.broshura}>
                  <div>
                     <p>Просмотреть брошюр</p>
                     <div>
                        <Link>
                           <p>Открыть</p>
                        </Link>
                     </div>
                  </div>
                  <div>
                     <img src={EcoEarthNatureLogo} alt="trj" />
                  </div>
               </div>
            </div>
         </nav>
      </div>
    </section>
  )
}
