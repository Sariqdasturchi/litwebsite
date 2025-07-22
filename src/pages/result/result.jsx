import React, { useState } from 'react';
import './result.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import rasm1 from "../../assets/rasm1.png"
import rasm2 from "../../assets/rasm2.png"
import rasm3 from "../../assets/rasm3.png"
import rasm4 from "../../assets/rasm4.png"
import rasm5 from "../../assets/rasm5.png"
import rasm6 from "../../assets/rasm6.png"
import rasm7 from "../../assets/rasm7.png"
import rasm8 from "../../assets/rasm8.png"

const peoples = [
  { name: "Nizomiddinova Zarnigor", img: rasm1 },
  { name: "Abduhafizov Alijon", img: rasm2 },
  { name: "Qurbonov Asilbek", img: rasm3 },
  { name: "Usmonkulov Abdusalom", img: rasm4 },
  { name: "Hamidov Olimjon", img: rasm5 },
  { name: "Obloqulov Umar", img: rasm6 },
  { name: "Sobirjonov Sodiqjon", img: rasm7 },
  { name: "Abdurashidov Sherzodbek", img: rasm8 }
];

export default function Result() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setSelectedIndex(realIndex);
  };

  return (
    <>
      <section className="result">
        <div className="custom-result">
          <div className="text">
            <h1>O’quvchilarimiz natijasi</h1>
          </div>
          <div className="selected-card">
            <img src={peoples[selectedIndex].img} alt={peoples[selectedIndex].name} className="selected-img" />
            <h2 className="selected-name">{peoples[selectedIndex].name}</h2>
          </div>

          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            onSlideChange={handleSlideChange}
            className="thumbnail-swiper"
          >
            {peoples.map((person, index) => (
              <SwiperSlide key={index}>
                <div className={`thumb-card ${selectedIndex === index ? "active" : ""}`}>
                  <img src={person.img} alt={person.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="footer-texts">
            <p className="footer-text">Natijalarni ko’rish...</p>
            <hr />
            <p className='footer-malumot'>
              Siz ham bizning talabalar safiga qo’shilmoqchi <br /> bo’lsangiz, sizni 4-5 iyul kuni bo’ladigan bepul <br /> seminarga taklif qilamiz
            </p>
            <div className="footer_btn">
              <button>Seminarga qatnashish</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
