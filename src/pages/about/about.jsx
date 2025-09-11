import React from 'react'
import pitichka from '../../assets/pitichka.png'
import './about.css'

export default function About() {
    return (
        <>
            <section className="about">
                <div className="aboutContainer">
                    <div className="aboutText">
                        <h1>Seminarda quyidagi mavzular <br /> bo’yicha ma’lumotlar beriladi</h1>
                    </div>
                    <div className="aboutImages">
                         <div className="aboutImage">
                           <img src={pitichka} alt="about" />
                            <p>Loyiha bilan ishlash bo’yicha umumiy ma’lumotlar</p>
                        </div>
                        <div className="aboutImage">
                            <img src={pitichka} alt="about" />
                            <p>Dasturlar: qaysi dastur nima vazifalarni bajaradi, qanday ishlatiladi</p>
                        </div>
                        <div className="aboutImage">
                             <img src={pitichka} alt="about" />
                            <p>Arxitektura va Dizayn haqida umumiy ma’lumotlar</p>
                        </div>
                        <div className="aboutImage">
                           <img src={pitichka} alt="about" />
                            <p>Kurs haqida batafsil ma’lumot</p>
                        </div>
                    </div>
                    <div className="aboutButton">
                        <button><a href="#kurs">Seminarga qatnashish</a></button>
                    </div>
                </div>
            </section>
        </>
    )
}
