import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './karusel.css';
import { Navigation } from 'swiper/modules';

import video1 from '../../assets/1.mp4';
import video2 from '../../assets/2.mp4';
import video3 from '../../assets/3.mp4';
import video4 from '../../assets/4.mp4';
import video5 from '../../assets/5.mp4';

export default function Karusel() {
    const data = [
        {
            video: video1,
            title: "Arxitektura va dizayn bo’yicha kuchli bilimga ega bo’lasiz",
            description: "Biz sizni 0 dan boshlab o‘rgatamiz. Bu yerda sizga “avval bilishing kerak” degan shart yo‘q. Har bir dastur, har bir chizma sodda tushuntiriladi va sizning darajangizga moslab beriladi."
        },
        {
            video: video2,
            title: "Qo’lizda tayyor Portfolio bo’ladi",
            description: "Bu portfolio ichida oddiy sinov yoki imtihon uchun qilgan dizaynlaringiz emas, balki real loyihalarda tayyorlagan dizaynlaringiz portfoliosi bo’ladi."
        },
        {
            video: video3,
            title: "Ishga tayyorgarlik",
            description: "Kurs davomida siz faqat kompyuter oldida o’tirib o’rganmaysiz, balki qurulish joylariga borib, o’lchamlar, dizayn, muzokaralarni o’rganib, mustaqil ishlashni o’rganasiz."
        },
        {
            video: video4,
            title: "Seminarlar",
            description: "Kurs davomida O’zbekistondagi top mutaxassislardan maxsus seminarlar bo’lib o’tadi va siz bu seminarlaarda qatnashib qo’shimcha bilimlarga ega bo’lasiz."
        },
        {
            video: video5,
            title: "Ekskursiyalar",
            description: "Turli Arxitektura firmalar va dizayn studiolarga ekskursiyaga borasiz. Bu sizga real ishda tajribangizni oshirishga yordam beradi."
        }
    ];

    return (
        <section className="karusel">
            <div className="containersText">
                <h2>Kursda sizni nimalar kutib turibdi, nimalarni o’rganasiz</h2>
                <h1>Bizda natija - bu diplom emas</h1>
            </div>
            <div className="carousel-wrapper">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={20}
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="card">
                                <div className="video-wrapper">
                                    <video src={item.video} autoPlay loop muted playsInline />
                                    <div className="video-label">VIDEO</div>
                                </div>
                                <div className="card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="bottomText">
                <p> Siz bizning kursimizda o’qish uchun to’lov qilmaysiz balki kelajakda o’ziz xohlagan kasbda ishlash uchun <b>investitsiya</b> kiritasiz</p>
                <div className="btn">
                    <button>Kursga yozilish</button>
                    <button>O’quvchilar natijasi</button>
                </div>
            </div>
        </section>
    );
}
