import React from 'react'
import s from './index.module.css'

export default function CardNews({title,iformation,image}) {
   return (
      <section className={s.news}>
         <div>
            <h2>{title}</h2>
            <p>{iformation}</p>
            <img src={image} alt={title} />
         </div>
      </section>
   )
}
