import React, { useEffect, useRef } from 'react'
import s from './index.module.css'

export default function CardVideo({video, title}) {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
        })
        .catch(error => {
          console.error('Ошибка воспроизведения видео:', error);
        });
    }
  }, []);
  return (
    <section className={s.video}>
      <video ref={videoRef} src={video}></video>
      <p>{title}</p>
    </section>
  )
}
