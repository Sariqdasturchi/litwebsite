import React, { useMemo, useRef, useState } from 'react';
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
import Usmonkulow from '../../assets/Abdusalom Usmonkhulov/001.jpg'
import Usmonkulow1 from '../../assets/Abdusalom Usmonkhulov/002.jpg'
import Usmonkulow2 from '../../assets/Abdusalom Usmonkhulov/003.jpg'
import Usmonkulow3 from '../../assets/Abdusalom Usmonkhulov/004.jpg'
import Usmonkulow4 from '../../assets/Abdusalom Usmonkhulov/005.jpg'
import Dilshodbek1_1 from '../../assets/Bibolayev Dilshodbek/1/1.jpg'
import Dilshodbek1_2 from '../../assets/Bibolayev Dilshodbek/1/2.jpg'
import Dilshodbek1_3 from '../../assets/Bibolayev Dilshodbek/1/3.jpg'
import Dilshodbek1_4 from '../../assets/Bibolayev Dilshodbek/1/4.jpg'
import Dilshodbek1_5 from '../../assets/Bibolayev Dilshodbek/1/5.jpg'
import Dilshodbek1_6 from '../../assets/Bibolayev Dilshodbek/1/6.jpg'
import Dilshodbek2_1 from '../../assets/Bibolayev Dilshodbek/2/fasa1.jpg'
import Dilshodbek2_2 from '../../assets/Bibolayev Dilshodbek/2/fasad_2.jpg'
import Dilshodbek2_3 from '../../assets/Bibolayev Dilshodbek/2/fasad_3.png'
import Dilshodbek3_1 from '../../assets/Bibolayev Dilshodbek/3/foto_salon1.jpg'
import Dilshodbek3_2 from '../../assets/Bibolayev Dilshodbek/3/foto_salon2.jpg'
import Dilshodbek3_3 from '../../assets/Bibolayev Dilshodbek/3/foto_studia3.jpg'
import Dilshodbek3_4 from '../../assets/Bibolayev Dilshodbek/3/foto_salon4.jpg'
import Dilshodbek3_5 from '../../assets/Bibolayev Dilshodbek/3/foto_salon5.jpg'
import Umar1 from '../../assets/Obloqulov Umar/1/1.jpeg'
import Umar1_1 from '../../assets/Obloqulov Umar/1/2.jpeg'
import Umar1_2 from '../../assets/Obloqulov Umar/1/3.jpeg'
import Umar1_3 from '../../assets/Obloqulov Umar/1/4.jpeg'
import Umar1_4 from '../../assets/Obloqulov Umar/1/5.jpeg'
import Umar1_5 from '../../assets/Obloqulov Umar/1/6.jpeg'
import Umar2_1 from '../../assets/Obloqulov Umar/2/1.jpg'
import Umar2_2 from '../../assets/Obloqulov Umar/2/2.jpg'
import Umar3_1 from '../../assets/Obloqulov Umar/3/1.jpg'
import Umar3_2 from '../../assets/Obloqulov Umar/3/2.jpg'
import Umar3_3 from '../../assets/Obloqulov Umar/3/3.jpg'
import Umar3_4 from '../../assets/Obloqulov Umar/3/4.jpg'
import Umar4_1 from '../../assets/Obloqulov Umar/4/1.jpg'
import Umar4_2 from '../../assets/Obloqulov Umar/4/2.jpg'
import Umar4_3 from '../../assets/Obloqulov Umar/4/3.jpg'
import Umar4_4 from '../../assets/Obloqulov Umar/4/4.jpg'
import Umar5_1 from '../../assets/Obloqulov Umar/5/1.jpg'
import Asilbek from '../../assets/QURBONOV ASILBEK/1.jpg'
import Asilbek1 from '../../assets/QURBONOV ASILBEK/2.jpg'
import Asilbek2 from '../../assets/QURBONOV ASILBEK/3.jpg'
import Asilbek3 from '../../assets/QURBONOV ASILBEK/4.jpg'
import Asilbek4 from '../../assets/QURBONOV ASILBEK/5.jpg'
import Asilbek5 from '../../assets/QURBONOV ASILBEK/6.jpg'
import Asilbek6 from '../../assets/QURBONOV ASILBEK/7.jpg'
import Asilbek7 from '../../assets/QURBONOV ASILBEK/8.jpg'
import Sodiq1 from '../../assets/sobirjonov sodiqjon/1/1.jpg'
import Sodiq1_1 from '../../assets/sobirjonov sodiqjon/1/2.jpg'
import Sodiq1_2 from '../../assets/sobirjonov sodiqjon/1/3.jpg'
import Sodiq1_3 from '../../assets/sobirjonov sodiqjon/1/4.jpg'
import Sodiq2_1 from '../../assets/sobirjonov sodiqjon/2/1.jpg'
import Sodiq2_2 from '../../assets/sobirjonov sodiqjon/2/2.jpg'
import Sodiq2_3 from '../../assets/sobirjonov sodiqjon/2/3.jpg'
import Sodiq2_4 from '../../assets/sobirjonov sodiqjon/2/4.jpg'
import Sodiq3_1 from '../../assets/sobirjonov sodiqjon/3/1.jpg'
import Sodiq3_2 from '../../assets/sobirjonov sodiqjon/3/2.jpg'
import Sodiq3_3 from '../../assets/sobirjonov sodiqjon/3/3.jpg'
import Sodiq4_1 from '../../assets/sobirjonov sodiqjon/4/1.jpg'
import Sodiq4_2 from '../../assets/sobirjonov sodiqjon/4/2.jpg'
import Sodiq4_3 from '../../assets/sobirjonov sodiqjon/4/3.jpg'
import Sodiq4_4 from '../../assets/sobirjonov sodiqjon/4/4.jpg'
import Sodiq4_5 from '../../assets/sobirjonov sodiqjon/4/5.jpg'
import Sodiq5_1 from '../../assets/sobirjonov sodiqjon/5/1.jpg'
import Sodiq5_2 from '../../assets/sobirjonov sodiqjon/5/2.jpg'
import Sodiq5_3 from '../../assets/sobirjonov sodiqjon/5/3.jpg'
import Sodiq6_1 from '../../assets/sobirjonov sodiqjon/6/1.jpg'
import Sodiq6_2 from '../../assets/sobirjonov sodiqjon/6/2.jpg'
import Sodiq6_3 from '../../assets/sobirjonov sodiqjon/6/3.jpg'
import Sodiq6_4 from '../../assets/sobirjonov sodiqjon/6/4.jpg'
import Sodiq6_5 from '../../assets/sobirjonov sodiqjon/6/5.jpg'
import Sodiq6_6 from '../../assets/sobirjonov sodiqjon/6/6.jpg'
import Sodiq6_7 from '../../assets/sobirjonov sodiqjon/6/7.jpg'
import zarnigor1_1 from '../../assets/NIZOMIDDINOVA ZARNIGOR/1/1.jpg'
import zarnigor1_2 from '../../assets/NIZOMIDDINOVA ZARNIGOR/1/2.jpg'
import zarnigor1_3 from '../../assets/NIZOMIDDINOVA ZARNIGOR/1/3.png'
import zarnigor1_4 from '../../assets/NIZOMIDDINOVA ZARNIGOR/1/4.jpg'
import zarnigor2_1 from '../../assets/NIZOMIDDINOVA ZARNIGOR/2/1.jpg'
import zarnigor2_2 from '../../assets/NIZOMIDDINOVA ZARNIGOR/2/2.jpg'
import zarnigor2_3 from '../../assets/NIZOMIDDINOVA ZARNIGOR/2/3.jpg'
import zarnigor2_4 from '../../assets/NIZOMIDDINOVA ZARNIGOR/2/4.jpg'
import zarnigor2_5 from '../../assets/NIZOMIDDINOVA ZARNIGOR/2/5.jpg'
import zarnigor3_1 from '../../assets/NIZOMIDDINOVA ZARNIGOR/3/1.jpg'
import zarnigor3_2 from '../../assets/NIZOMIDDINOVA ZARNIGOR/3/2.jpg'
import zarnigor3_3 from '../../assets/NIZOMIDDINOVA ZARNIGOR/3/3.jpg'
import zarnigor3_4 from '../../assets/NIZOMIDDINOVA ZARNIGOR/3/4.jpg'
import olim1_1 from '../../assets/Hamidov Olimjon/1.jpg'
import olim1_2 from '../../assets/Hamidov Olimjon/2.jpg'
import olim1_3 from '../../assets/Hamidov Olimjon/3.jpg'
import olim1_4 from '../../assets/Hamidov Olimjon/4.jpg'
import olim1_5 from '../../assets/Hamidov Olimjon/5.png'
import olim1_6 from '../../assets/Hamidov Olimjon/6.jpg'
import ali1_1 from '../../assets/Abduxafizov Alijon/1.png'
import ali1_2 from '../../assets/Abduxafizov Alijon/2.jpg'
import ali1_3 from '../../assets/Abduxafizov Alijon/3.jpg'
import ali1_4 from '../../assets/Abduxafizov Alijon/4.jpg'
import ali1_5 from '../../assets/Abduxafizov Alijon/5.jpg'
import ali2_1 from '../../assets/Abduxafizov Alijon/dsdfgh.png'
import ali2_2 from '../../assets/Abduxafizov Alijon/fg.png'
import ali2_3 from '../../assets/Abduxafizov Alijon/gfd.png'
import ali3_1 from '../../assets/Abduxafizov Alijon/GGD.png'
import ali3_2 from '../../assets/Abduxafizov Alijon/hhhhhhhhhh.jpg'
import ali3_3 from '../../assets/Abduxafizov Alijon/GGS.png'
import ali3_4 from '../../assets/Abduxafizov Alijon/HJB.png'
import ali3_5 from '../../assets/Abduxafizov Alijon/sanuz.png'
import ali4_1 from '../../assets/Abduxafizov Alijon/sanuzel.png'
import ali4_2 from '../../assets/Abduxafizov Alijon/spalniy full..jpg'
import ali4_3 from '../../assets/Abduxafizov Alijon/spalniy fulln..jpg'
import ali4_4 from '../../assets/Abduxafizov Alijon/spalniy2.jpg'
import ali4_5 from '../../assets/Abduxafizov Alijon/uio.png'
import ali4_6 from '../../assets/Abduxafizov Alijon/WC.png'



const peoples = [
  { name: "Nizomiddinova Zarnigor", img: rasm1, ishlari: [zarnigor1_1, zarnigor1_2, zarnigor1_3, zarnigor1_4], ishlari_second: [zarnigor2_1, zarnigor2_2, zarnigor2_3, zarnigor2_4, zarnigor2_5], ishlari_third: [zarnigor3_1, zarnigor3_2, zarnigor3_3, zarnigor3_4] },
  { name: "Abduhafizov Alijon", img: rasm2, ishlari: [ali1_1, ali1_2, ali1_3, ali1_4,ali1_5], ishlari_second: [ali2_1, ali2_2, ali2_3], ishlari_third: [ali3_1, ali3_2, ali3_3, ali3_4, ali3_5], ishlari_fourth: [ali4_1, ali4_2, ali4_3, ali4_5, ali4_6, ali4_4] },
  { name: "Qurbonov Asilbek", img: rasm3, ishlari: [Asilbek, Asilbek1, Asilbek2, Asilbek3, Asilbek4, Asilbek5, Asilbek6, Asilbek7] },
  { name: "Usmonkulov Abdusalom", img: rasm4, ishlari: [Usmonkulow, Usmonkulow1, Usmonkulow2, Usmonkulow3, Usmonkulow4] },
  { name: "Hamidov Olimjon", img: rasm5, ishlari: [olim1_1, olim1_2, olim1_3, olim1_4, olim1_5, olim1_6] },
  { name: "Obloqulov Umar", img: rasm6, ishlari: [Umar1, Umar1_1, Umar1_2, Umar1_3, Umar1_4, Umar1_5], ishlari_second: [Umar2_1, Umar2_2], ishlari_third: [Umar3_1, Umar3_2, Umar3_3, Umar3_4], ishlari_fourth: [Umar4_1, Umar4_2, Umar4_3, Umar4_4], ishlari_fifth: [Umar5_1] },
  { name: "Sobirjonov Sodiqjon", img: rasm7, ishlari: [Sodiq1, Sodiq1_1, Sodiq1_2, Sodiq1_3], ishlari_second: [Sodiq2_1, Sodiq2_2, Sodiq2_3, Sodiq2_4], ishlari_third: [Sodiq3_1, Sodiq3_2, Sodiq3_3], ishlari_fourth: [Sodiq4_1, Sodiq4_2, Sodiq4_3, Sodiq4_4, Sodiq4_5], ishlari_fifth: [Sodiq5_1, Sodiq5_2, Sodiq5_3], ishlariSixth: [Sodiq6_1, Sodiq6_2, Sodiq6_3, Sodiq6_4, Sodiq6_5, Sodiq6_6, Sodiq6_7] },
  { name: "Abdurashidov Sherzodbek", img: rasm8, ishlari: [Dilshodbek1_1, Dilshodbek1_2, Dilshodbek1_3, Dilshodbek1_4, Dilshodbek1_5, Dilshodbek1_6], ishlari_second: [Dilshodbek2_1, Dilshodbek2_2, Dilshodbek2_3], ishlari_third: [Dilshodbek3_1, Dilshodbek3_2, Dilshodbek3_3, Dilshodbek3_4, Dilshodbek3_5] },
];

export default function Result() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showAllWorks, setShowAllWorks] = useState(false);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setSelectedIndex(realIndex);
  };

  const handleThumbnailClick = (index) => {
    if (swiperRef.current?.slideToLoop) {
      swiperRef.current.slideToLoop(index);
    }
  };
  const selectedPerson = peoples[selectedIndex];
  const allWorks = useMemo(() => [
    ...(selectedPerson.ishlari || []),
    ...(selectedPerson.ishlari_second || []),
    ...(selectedPerson.ishlari_third || []),
    ...(selectedPerson.ishlari_fourth || []),
    ...(selectedPerson.ishlari_fifth || []),
    ...(selectedPerson.ishlariSixth || []),
  ], [selectedPerson]);


  return (
    <section className="result" id='oquv'>
      <div className="custom-result">
        <div className="text">
          <h1>O’quvchilarimiz natijasi</h1>
        </div>
        <div className="selected-card">
          {allWorks.slice(0, 4).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`work-${idx}`}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="work-img"
              style={{ backgroundColor: "#5c5353ff" }}
              onLoad={(e) => (e.target.style.backgroundColor = "transparent")}
            />
          ))}

        </div>
        <h2 className="selected-name">{selectedPerson.name}</h2>

        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="thumbnail-swiper"
        >
          {peoples.map((person, index) => (
            <SwiperSlide key={index}>
              <div
                className={`thumb-card ${selectedIndex === index ? "active" : ""}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  draggable="false"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="footer-texts">
          <button className="footer-text" onClick={() => setShowAllWorks(true)}>
            Natijalarni ko’rish...</button>
          <hr />
          <p className='footer-malumot'>
            Siz ham bizning talabalar safiga qo’shilmoqchi <br /> bo’lsangiz, sizni 4-5 iyul kuni bo’ladigan bepul <br /> seminarga taklif qilamiz
          </p>
          <div className="footer_btn">
            <button>Seminarga qatnashish</button>
          </div>
        </div>
      </div>
          
      {showAllWorks && (
        <div className="modal-backdrop" onClick={() => setShowAllWorks(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedPerson.name} ishlar to‘plami</h2>

            <div className="modal-grid">
              {(selectedPerson.ishlari || []).map((img, i) => (
                <img key={i} src={img} alt={`ish-${i}`} className="modal-img" />
              ))}
            </div>
            {selectedPerson.ishlari && <hr className="section-line" />}

            <div className="modal-grid">
              {(selectedPerson.ishlari_second || []).map((img, i) => (
                <img key={i} src={img} alt={`ish-second-${i}`} className="modal-img" />
              ))}
            </div>
            {selectedPerson.ishlari_second && <hr className="section-line" />}

            <div className="modal-grid">
              {(selectedPerson.ishlari_third || []).map((img, i) => (
                <img key={i} src={img} alt={`ish-third-${i}`} className="modal-img" />
              ))}
            </div>
            {selectedPerson.ishlari_third && <hr className="section-line" />}

            <div className="modal-grid">
              {(selectedPerson.ishlari_fourth || []).map((img, i) => (
                <img key={i} src={img} alt={`ish-fourth-${i}`} className="modal-img" />
              ))}
            </div>
            {selectedPerson.ishlari_fourth && <hr className="section-line" />}

            <div className="modal-grid">
              {(selectedPerson.ishlari_fifth || []).map((img, i) => (
                <img key={i} src={img} alt={`ish-fifth-${i}`} className="modal-img" />
              ))}
            </div>
            {selectedPerson.ishlari_fifth && <hr className="section-line" />}

            <div className="modal-grid">
              {(selectedPerson.ishlariSixth || []).map((img, i) => (
                <img key={i} src={img} alt={`ish-sixth-${i}`} className="modal-img" />
              ))}
            </div>

            <button className="close-btn" onClick={() => setShowAllWorks(false)}>Yopish</button>
          </div>
        </div>
      )}

    </section>
  );
}
