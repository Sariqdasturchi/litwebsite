import React, { useEffect, useRef, useState } from 'react';
import video1 from '../../assets/1.mp4';
import video2 from '../../assets/2.mp4';
import video3 from '../../assets/3.mp4';
import video4 from '../../assets/4.mp4';
import video5 from '../../assets/5.mp4';
import './karusel.css';

const videos = [
    {
        src: video1,
        title: "Arxitektura va dizayn bo’yicha kuchli bilimga ega bo’lasiz  ",
        desc: "Biz sizni 0 dan boshlab o‘rgatamiz. Bu yerda sizga “avval bilishing kerak” degan shart yo‘q.Har bir dastur, har bir chizma sodda tushuntiriladi va sizning darajangizga moslab beriladi."
    },
    {
        src: video2,
        title: "Qo’lizda tayyor Portfolio bo’ladi  ",
        desc: "Bu portfolio Ichida oddiy sinov yoki imtihon uchun qilgan dizaynlaringiz emas balkim real loyihalarda tayyorlagan dizaynlaringiz portfoliosi bo’ladi."
    },
    {
        src: video3,
        title: "Ishga tayyorgarlik  ",
        desc: "Kurs davomida siz faqat kompyuter oldida o’tirib o’rganmaysiz, balki qurulish joylariga borib, o’lchamlar, dizayn, muzokaralarni o’rganib, mustaqil ishlashni o’rganasiz."
    },
    {
        src: video4,
        title: "Seminarlar ",
        desc: "Kurs davomida O’zbekistondagi top mutaxassislardan maxsus seminarlar bo’lib o’tib siz bu seminarlaarda qatnashib qo’shimcha kuchli bilimlarga ega bo’lasiz"
    },
    {
        src: video5,
        title: "Ekskursiyalar ",
        desc: "Turli Arxitektura firmalar va dizayn studiolarga ekskursiyaga borasiz. Bu sizga real ishda tajribangizni oshirishga yordam beradi."
    }
];

export default function Karusel() {
    const [index, setIndex] = useState(0);
    const videoRef = useRef(null);
    const touchStartX = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % videos.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.load();
        }
    }, [index]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (diff > 50) {
            setIndex((prev) => (prev + 1) % videos.length);
        } else if (diff < -50) {
            setIndex((prev) => (prev - 1 + videos.length) % videos.length);
        }
    };

    return (
        <section className="karusel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="karuselContainers">
                <div className="karuselContainer">
                    <div className="karuselText">
                        <h2>Kursda sizni nimalar kutib turibdi, nimalarni o’rganasiz</h2>
                        <h1>Bizda natija - bu diplom emas</h1>
                    </div>

                    <div className="videoWrapper">
                        <video ref={videoRef} width="100%" height="auto" autoPlay muted>
                            <source src={videos[index].src} type="video/mp4" />
                        </video>
                        <h1>{videos[index].title}</h1>
                        <p>{videos[index].desc}</p>
                    </div>

                    <div className="bottomText">
                        <p> Siz bizning kursimizda o’qish uchun to’lov qilmaysiz balki kelajakda o’ziz xohlagan kasbda ishlash uchun <b>investitsiya</b> kiritasiz
                        </p>
                        <div className="btn">
                            <button className="kurs">Kursga yozilish</button>
                            <button className="kurs_two">O’quvchilar natijasi</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}