import React, { useEffect, useState } from 'react'
import CategoryMenu from '../../components/CategoryMenu'
import product_category from '../../JSON/product_category.json'
import CategoryProductCard from '../../components/CategoryProductCard';

export default function ProductPage() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    if (product_category.data && product_category.data.values) {
        setNewsData(product_category.data.values);
    }
  }, []);
  return (
    <section>
      <div>
        <CategoryMenu/>
        <div>
                {
                newsData.length > 0 ? (
                    newsData.map((el) => <CategoryProductCard key={el.id} {...el}/>)
                ) : (
                    <p>Данные загружаются...</p>
                )
              }
        </div>
      </div>
    </section>
  )
}
