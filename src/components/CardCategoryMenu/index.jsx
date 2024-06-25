import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function CardCategoryMenu({title,img}) {
  return (
    <section className={s.card}>
         <Link>
            <img src={img} alt={title} />
            <p>{title}</p>
         </Link>
    </section>
  )
}
