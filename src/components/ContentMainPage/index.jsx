import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import news from '../../JSON/news.json'
import CardNews from '../CardNews'
import arrowl from './img/Arrowl.svg'
import arrowp from './img/Arrowp.svg'
import video from '../../JSON/videomaterial.json'
import CardVideo from '../CardVideo'


export default function ContentMainPage() {
   const [newsData, setNewsData] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const [videoData, setVideoData] = useState([]);

   useEffect(() =>{
      if(video.data&&video.data.values){
         const limitedData = video.data.values.slice(-2)
         setVideoData(limitedData)
      }
   }, [])

   useEffect(() => {
      if (news.data && news.data.values) {
        const limitedData = news.data.values.slice(-5);
        setNewsData(limitedData);
        setCurrentSlide(limitedData.length - 1);
      }
    }, []);

    const nextSlide = () => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % newsData.length);
    };
    const prevSlide = () => {
      setCurrentSlide((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);
    };
  return (
    <section className={s.conteiner}>
      <div>
         <div>
            <p onClick={prevSlide}><img src={arrowl} alt="arrowl" /></p>
            <p onClick={nextSlide}><img src={arrowp} alt="arrowp" /></p>
         </div>
         <div>
            <div>
               <iframe className={s.frame} src='https://3c7d74a7d17b47f2b6fd9516748baa8a.elf.site' width='448' height='700' frameborder='0'></iframe>
            </div>
            <div>
               {newsData.length > 0 ? (
                  <CardNews key={newsData[currentSlide].id} {...newsData[currentSlide]} />
              ) : (
                <p>Данные загружаются...</p>
              )}
            </div>
         </div>
         <div className={s.video}>
            <h2>Видеоматерилы</h2>
            <div>
               {
                  videoData.length>0? (
                     videoData.map(el=><CardVideo key={el.id} {...el} />)
                  ):
                  <p>Данные загружаются...</p>
               }
            </div>
         </div>
      </div>
    </section>
  )
}
