import { useState, useEffect } from "react"
import posterr from "../assets/posterr.jpeg"
import posterr2 from "../assets/posterr2.jpeg"
import posterr3 from "../assets/posterr3.jpg"


function ApplySection() {

  // 👉 APPLY SLIDER (LEFT SIDE)
  const [position, setPosition] = useState(0)

  const slideLeft = () => {
    setPosition((prev) => Math.min(prev + 150, 0))
  }

  const slideRight = () => {
    setPosition((prev) => prev - 150)
  }

  // 👉 AD SLIDER (RIGHT SIDE)
  const [adIndex, setAdIndex] = useState(0)

  const ads = [posterr, posterr2, posterr3]

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setAdIndex((prev) => (prev + 1) % ads.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="apply-ad-section">

      {/* LEFT APPLY CARD */}
      <div className="apply-card">

        <h3 className="apply-title">Apply Now</h3>

        <button className="arrow left" onClick={slideLeft}>
          &#10094;
        </button>

        <div className="apply-slider">
          <div
            className="apply-track"
            style={{ transform: `translateX(${position}px)` }}
          >

            <div className="apply-item">
              <div className="icon-box">💰</div>
              <span>Savings Account</span>
            </div>

            <div className="apply-item">
              <div className="icon-box">💳</div>
              <span>Credit Card</span>
            </div>

            <div className="apply-item">
              <div className="icon-box">🤝</div>
              <span>Personal Loan</span>
            </div>

            <div className="apply-item">
              <div className="icon-box">🏠</div>
              <span>Home Loan</span>
            </div>

            <div className="apply-item">
              <div className="icon-box">🚗</div>
              <span>Car Loan</span>
            </div>

          </div>
        </div>

        <button className="arrow right" onClick={slideRight}>
          &#10095;
        </button>

      </div>

      {/* RIGHT AD SLIDER */}
      <div className="ad-slider">

        <div
          className="ad-track"
          style={{ transform: `translateX(-${adIndex * 100}%)` }}
        >
          {ads.map((img, index) => (
            <div className="ad-slide" key={index}>
              <img src={img} alt="ad" />
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="dots">
          {ads.map((_, index) => (
            <span
              key={index}
              className={`dot ${adIndex === index ? "active" : ""}`}
            ></span>
          ))}
        </div>

      </div>

    </section>
  )
}

export default ApplySection