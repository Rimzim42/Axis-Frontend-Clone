function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="highlight">open</span> to your learning <br />
          <span className="highlight">open</span> to your aspirations
        </h1>

        <p>Guiding you to achieve your financial endeavors</p>

        <div className="hero-tabs">
          <span className="active">Save & Grow</span>
          <span>Spend with Purpose</span>
          <span>Borrow Smart</span>
          <span>Build for the future</span>
          <span>Smart Pay</span>
          <span>Bank safe</span>
        </div>

        <div className="hero-cards">
          <div className="card">Zero Balance Savings Account</div>
          <div className="card">Savings Tips</div>
          <button className="explore-btn">Explore Learning Hub</button>
        </div>
      </div>
    </section>
  )
}

export default Hero