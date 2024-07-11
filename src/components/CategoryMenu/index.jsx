import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function CategoryMenu() {
  return (
    <section className={s.category}>
      <div>
         <Link to={'/category/product'}><p>Продукты</p></Link>
         <Link to={'/category/cultura'}><p>Культуры</p></Link>
         <Link to={'/category/vred_ob'}><p>Вредные объекты</p></Link>
      </div>
    </section>
  )
}
