import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import product_category from '../../JSON/product_category.json'
import CardCategoryMenu from '../CardCategoryMenu';

export default function MenuProduct() {
   const [newsData, setNewsData] = useState([]);
   useEffect(() => {
      if (product_category.data && product_category.data.values) {
         setNewsData(product_category.data.values);
      }
   }, []);
  return (
    <section className={s.conteiner}>
      <nav>
         <h2>Продукты</h2>
         <div>
            {
               newsData.length > 0 ? (
                  newsData.map((el) => <CardCategoryMenu key={el.id} {...el}/>)
               ) : (
                  <p>Данные загружаются...</p>
               )
            }
         </div>
      </nav>
    </section>
  )
}
