import React from 'react'
import './information.css'
import logotip from '../../assets/logotip.png'
import { GiCheckMark } from "react-icons/gi";
import { FaExclamation } from "react-icons/fa";

export default function Information() {
    return (
        <>
            <section className="information">
                <div className="container">
                    <div className="heading">
                        <h1>Muqarnas akademiyasi bu muammolarga yechim beradi</h1>
                    </div>
                    <img src={logotip} alt="" className="logotip"/>
                    <div className="containerText">

                        <p><FaExclamation className="undov" /> <b>Kursdan keyin ish topolmayman</b>  <br />
                            Sabab: Ko‘pchilik kurslar faqat teoriya va dasturga <br />qaratilgan. Portfoliosiz, tajribasiz bo‘lgan o‘quvchi mehnat bozoriga chiqolmaydi.
                        </p>

                        <p><GiCheckMark className="check" />Biz o‘qitamiz, tajriba beramiz va ish bilan ta’minlaymiz Muqarnasda siz faqat o‘rganib chiqmaysiz — oxirgi 1 oyda real loyihalar bilan ishlaysiz. Har bir o‘quvchining portfoliosi bo‘ladi va yaxshi natija ko‘rsatganlarni o‘zimiz tavsiya qilamiz. </p>

                        <p><FaExclamation className="undov" /> <b> Kursda faqat kompyuter dasturi o‘rgatiladi</b>  <br />
                                        Sabab: Ba’zi kurslar 3ds Max yoki AutoCAD’ni qanday ishlatishni o‘rgatadi, lekin bu mutaxassis bo‘lish uchun yetarli emas.
                        </p>
                            <p>  <GiCheckMark className="check" />    Bizda siz mutaxassislikka qadam qo‘yasiz Muqarnas — bu faqat “dastur o’rgatadigan kursi” emas. Bizda chizma tahlili, dizayn nazariyasi, loyiha fikrlashi, loyiha jarayonlarini tushunish o‘rgatiladi. Biz sizdan “renderchi” emas, haqiqiy arxitektor tayyorlaymiz.</p>
                            <p><FaExclamation className="undov" /> <b>Ustoz bilan bog‘lanib o‘rganish imkoni bo‘lmaydi</b> <br />
                                    Sabab: Darsda qatnashasiz, lekin keyinchalik savollaringizga javob beradigan mentor bo‘lmaydi. Boshqa kurslarda “ustoz” faqat ekran ortida.
                                </p>
                                <p>  <GiCheckMark className="check" />    Bizda ustoz — ham ustoz, ham yo‘l ko‘rsatuvchi Siz faqat darsda emas, darsdan keyin ham ustoz bilan bog‘lana olasiz. Ustozimiz Ubaydullo Abduxafizov – 5 yillik tajribaga ega arxitektor va siz bilan bevosita ishlaydi. Mentorlik, fikr olish, loyihani ko‘rib berish — doimiy davom etadi.</p>
<p><FaExclamation className="undov" /> <b>Pulimni havoga sovurib qo‘yaman deb qo‘rqaman</b> <br />
                                        Sabab: Kursga boradi, o‘rganolmaydi yoki hech qanday natija bo‘lmaydi — natijada sarflagan puliga afsus qiladi.
                                    </p>
                                    <p>   <GiCheckMark className="check" />   Biz pulga emas, natijaga qaraymiz Har oy saralashlar bo‘ladi — bilimi kuchli o‘quvchi keyingi bosqichga o‘tadi, qiynalayotganlar bilan ishlaymiz, yordam beramiz. Maqsadimiz — tayyor mutaxassis bo‘lishingiz.</p>
                    </div>
                </div>  
            </section >
        </>                     
    )  
}  
