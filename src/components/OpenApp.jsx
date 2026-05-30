import { useEffect } from "react"
import phoneImg from "../assets/Services.png"

function OpenApp() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="open-app-section">

      {/* HEADER */}
      <div className="header-container reveal">
        <h2>
          The best of digital banking is now <span>open</span>
        </h2>
        <p>
          Get the <strong>open</strong> app by Axis Bank for a superior experience – 
          <a href="#"> Explore More</a>
        </p>
      </div>

      <div className="open-app-content">

        {/* LEFT FEATURES */}
        <div className="left-features">
          <div className="feature reveal">
            <span className="icon">💸</span>
            <p>Easy overseas money transfer</p>
          </div>

          <div className="feature reveal">
            <span className="icon">📱</span>
            <p>One-stop bill pay</p>
          </div>

          <div className="feature reveal">
            <span className="icon">📈</span>
            <p>Accounts, Investments & more</p>
          </div>
        </div>

        {/* PHONE IMAGE */}
        <div className="phone-container reveal">
          <img src={phoneImg} className="main-phone" />
        </div>

        {/* RIGHT FEATURES */}
        <div className="right-features">
          <div className="feature reveal">
            <span className="icon">🎯</span>
            <p>Track all card payments</p>
          </div>

          <div className="feature reveal">
            <span className="icon">💰</span>
            <p>Personal Loans on-the-go</p>
          </div>

          <div className="feature reveal">
            <span className="icon">🏦</span>
            <p>Instant FD opening & more</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default OpenApp