import React from 'react'
import background from '../../assets/background.png'
import './home.css'

export default function Home() {
    return (
        <>
            <section className="home">
                <div className="homeText">
                    <h1 className="Texth">17-18 iyul, yangi guruh <br /> uchun <span>Bepul Seminar</span> </h1>
                </div>
                <div className="homeContainer">
                    <div className="homeImage">
                        <img src={background} alt="" />
                    </div>
                    <div className="homeButton">
                        <p><b>Arxitekturani 0 dan </b>o’rganing va <b> 8 oydan keyin, ishga tayyor, </b>portfolioga ega mutaxassisga aylaning</p>
                        <p>Bepul seminarga qatnashib, barchasiga o’ziz ishonch hosil qiling.</p>
                        <button>Bepul seminarga qatnashish</button>
                    </div>
                </div>
            </section>
        </>
    )
}
