import React from 'react'
import './faq.css'

export default function Faq() {

    const faqData = [
        {
            question: "Bu kurs kimlar uchun mo‘ljallangan?",
            answer: "Kursimiz arxitektura va dizayn sohasiga qiziqqan, 0 dan o‘rganmoqchi bo‘lgan yoshlar uchun. Dasturiy bilim shart emas — biz hammasini bosqichma-bosqich o‘rgatamiz."
        },
        {
            question: "Kursda qaysi dasturlar o‘rgatiladi?",
            answer: "AutoCAD, 3ds Max, Photoshop kabi arxitektura va dizayn sohasida eng kerakli dasturlarni o‘rgatamiz. Har bir dastur amaliy mashg‘ulotlar bilan birga o‘tiladi."
        },
        {
            question: "Kurs davomiyligi qancha?",
            answer: "Kurs 8 oy davom etadi: 7 oy nazariy va amaliy darslar, oxirgi 1 oy real loyiha ustida ishlanadi."
        },
        {
            question: "Ishga joylashishda yordam berasizlarmi?",
            answer: "Ha albatta. Yaxshi natija ko‘rsatgan o‘quvchilarni ishi bilan ta’minlashga yordam beramiz. Hozirning o‘zida bir nechta dizayn studiyalari bitiruvchilarimizni qabul qilishga tayyor."
        },
        {
            question: "Portfolio tayyorlab berasizlarmi?",
            answer: "Ha. O‘quvchilarimiz kurs davomida o‘z loyihalari ustida ishlaydi va yakunda shaxsiy portfolioga ega bo‘ladi. Bu ularning keyingi ish faoliyati uchun juda katta ustunlik beradi."
        },
        {
            question: "Kurs davomida qo‘shimcha nimalar bo‘ladi?",
            answer: "Kurs davomida sohadagi top mutaxassislar bilan seminarlar, ekskursiyalar, real loyiha ustida ishlash kabi bonus imkoniyatlar mavjud."
        }
    ];

    const [openIndex, setOpenIndex] = React.useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="faq-container">
                <h2 className="faq-title">Ko'p beriladigan savollar</h2>
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button className="faq-question" onClick={() => toggle(index)}>
                                {openIndex === index ? '−' : '+'} {faq.question}
                            </button>
                            {openIndex === index && (
                                <p className="faq-answer">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
