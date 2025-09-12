import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [registeredCount, setRegisteredCount] = useState(0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    if (form.phone.length < 13) {
      setError(
        "Telefon raqami kamida 13 ta belgidan iborat bo'lishi kerak. (+998 bilan birga)"
      );
      return;
    }

    setError("");

    // Send data to SheetDB API
    try {
      const response = await fetch("https://sheetdb.io/api/v1/t85ry5jwag61s", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "SheetDB-Auth": "o2xeovshccim5l06ygvspphq3i4rbph4zvsc41ag",
        },
        body: JSON.stringify({
          data: [{ name: form.name, phone: form.phone }],
        }),
      });
      console.log(response);
      
      if (response.ok) {
        alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
        setRegisteredCount((prev) => prev + 1);
        setForm({ name: " ", phone: " " });
      } else {
        setError("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
      }
    } catch (err) {
      setError("Serverga ulanishda xatolik. Iltimos, internetni tekshiring.");
    }
  };

  return (
    <div className="registration-container" id="kurs">
      <h2>Seminarda qatnashish uchun ro'yxatdan o'ting</h2>
      <form className="form-box" onSubmit={handleSubmit}>
        {error && <p className="form-error">{error}</p>}

        <label>Ismingiz</label>
        <input
          type="text"
          name="name"
          placeholder="Ubaydullo"
          value={form.name}
          onChange={handleChange}
        />

        <label>Raqamingiz</label>
        <input
          type="tel"
          name="phone"
          placeholder="+998912345678"
          value={form.phone}
          onChange={handleChange}
        />

        <p className="info-text">
          Ma’lumotlaringiz sir saqlanadi. Siz bilan faqat kurs bo‘yicha aloqaga
          chiqamiz
        </p>

        <button type="submit" className="submit-btn">
          Davom etish...
        </button>
      </form>

      <div className="note">
        <strong>Diqqat!</strong> <br />
        Faqat 1 ta guruh qabul qilinadi. Guruhda 12 ta o‘quvchi bo‘ladi.
        Shoshiling, guruhga qo‘shilishga ulgurib qoling!
      </div>

      <div className="status-boxes"></div>
      <div className="status-card">
        <p className="title">Seminarga ro’yxatdan o’tdi</p>
        <span className="count total">{registeredCount} ta</span>
      </div>
    </div>
  );
}
