import React from 'react'
import logo from './image/logo2.svg'
import { Link } from 'react-router-dom'
import inst from './image/logo/inst.svg'
import youtube from './image/logo/youtube.svg'
import viber from './image/logo/viber.svg'
import s from './index.module.css'
import logo_target from './image/logo_target.svg'
import call from './image/logo/call_calling.svg'
import mail from './image/logo/mail.svg'


export default function Footer() {
  return (
    <footer className={s.footer}>
      <section>
        <div>
          <nav className={s.onenavig}>
            <div>
              <Link><img src={logo} alt="logo" /></Link>
            </div>
            <div>
              <Link>Политика конфиденциальности</Link>
            </div>
            <div>
              <Link><img src={inst} alt="inst" /></Link>
              <Link><img src={youtube} alt="youtube" /></Link>
              <Link><img src={viber} alt="viber" /></Link>
            </div>
          </nav>
          <nav className={s.navig}>
            <div>
                <Link>
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
          </nav>
        </div>
        <nav className={s.twonavig}>
          <div>
            <div>
              <img src={call} alt="call" />
              <div>
                <a href="#"><p>+375 152 68-81-56</p></a>
                <a href="#"><p>+375 44 795-96-86</p></a>
              </div>
            </div>
            <div>
              <img src={mail} alt="mail" />
              <a href="#">
                <p>ekofarming@mail.ru</p>
              </a>
            </div>
          </div>
          <div>
            <a href="mailto:"><img src={logo_target} alt="dhft" /></a>
          </div>
        </nav>
      </section>
      <p>© 2024 Все права защищены</p>
    </footer>
  )
}
