import React from 'react'
import { IoMdMenu } from "react-icons/io";
import "./header.css"

export default function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="logo">
            <h1>MUQARNAS academy</h1>
            <p>Arxitektor bo’lish uchun - birinchi qadam</p>
          </div>
          <div className="mobilemenu">
            <div className="burgerMenu">
              <IoMdMenu style={{ fontSize: "25px", color: "#fff" }} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
