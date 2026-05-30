import { useEffect, useState } from "react"
import Man from "../assets/Man.avif"
import Cred1 from "../assets/Cred1.jpeg"
import Cred2 from "../assets/Cred2.jpeg"
import Cred3 from "../assets/Cred3.jpg"
import loan from "../assets/loan.avif"

function AccountSelector() {

  const [activeTab, setActiveTab] = useState("savings")

  // ✅ ADD EMI STATES HERE 👇
  const [loan, setLoan] = useState(50000)
  const [rate, setRate] = useState(9.99)
  const [tenure, setTenure] = useState(12)

  const monthlyRate = rate / 12 / 100

  const emi =
    (loan * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1)

  const totalAmount = emi * tenure
  const interest = totalAmount - loan
  // 

  // 👉 Scroll to section on click
  const handleClick = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // 👉 Scroll spy (auto active tab)
  useEffect(() => {
    const sections = document.querySelectorAll(".selector-section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="account-selector-section">

      {/* STICKY TABS */}
      <div className="tabs-bar">
        {["savings","credit","loans","investments","deposits","payments", "Plan-o-meter"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleClick(tab)}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          >
            {tab === "plan" ? "Plan-o-meter" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            
          </button>
        ))}
      </div>

      {/* SECTIONS */}

      <div id="savings" className="selector-section">
        {/* TOP LIGHT CARD */}
  <div className="savings-top-card">

    <div className="top-left">
      <span className="badge">open to learning better finances</span>

      <h2>How to put your Savings on autopilot?</h2>
      <h2>How to open a Bank Account in 5 easy steps?</h2>

      <a href="#" className="learn-more">Learn more</a>
    </div>

    <div className="top-right">
      <img src={Man} alt="person" />
  </div>

  </div>

  {/* MAIN MAROON CARD */}
  <div className="savings-card">

        <div className="savings-card-top">
        <h2>Open an account that suits your saving style</h2>
        <button className="explore-btn">Explore More</button>
        </div>

        <div className="account-options">

        <div className="account-box">
            <div className="account-icon">★</div>
            <div className="account-text">
            <h4>Premium Account</h4>
            <p>For the elite</p>
            </div>
            <div className="account-arrow">›</div>
        </div>

        <div className="account-box">
            <div className="account-icon">👤</div>
            <div className="account-text">
            <h4>Regular Account</h4>
            <p>For the always on</p>
            </div>
            <div className="account-arrow">›</div>
        </div>

        <div className="account-box">
            <div className="account-icon">👩</div>
            <div className="account-text">
            <h4>Women's Account</h4>
            <p>For the empowered</p>
            </div>
            <div className="account-arrow">›</div>
        </div>

        <div className="account-box">
            <div className="account-icon">👴</div>
            <div className="account-text">
            <h4>Senior Citizens Account</h4>
            <p>For the elderly</p>
            </div>
            <div className="account-arrow">›</div>
        </div>

        </div>

    </div>

      </div>

      <div id="credit" className="selector-section">
        {/* TOP HERO CARD */}
        <div className="credit-top-card">

            <div className="credit-left">
            <span className="badge">open to learning smarter spending habits</span>

            <h2>Beyond swiping: Smarter Credit Card moves</h2>
            <h3>Unlocking hidden perks of your Credit Card.</h3>

            <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="credit-right">
            <img src={Cred1} alt="card1" />
            <img src={Cred2} alt="card2" />
            <img src={Cred3} alt="card3" />
            </div>

        </div>

        {/* MAIN CARD SECTION */}
        <div className="credit-card">

            <div className="credit-card-top">
            <h2>Choose a Credit Card basis what you love</h2>

            <div className="credit-actions">
                <button className="apply-btn">Apply Now</button>
                <button className="explore-btn">Explore More</button>
            </div>
            </div>

            <div className="credit-options">

            <div className="credit-box">
                <div className="credit-icon">🛍️</div>
                <div className="credit-text">
                <h4>Shopping Cards</h4>
                <p>For the shopaholic</p>
                </div>
                <div className="credit-arrow">›</div>
            </div>

            <div className="credit-box">
                <div className="credit-icon">✈️</div>
                <div className="credit-text">
                <h4>Travel Cards</h4>
                <p>For the roaming spirit</p>
                </div>
                <div className="credit-arrow">›</div>
            </div>

            <div className="credit-box">
                <div className="credit-icon">🍽️</div>
                <div className="credit-text">
                <h4>Dining Cards</h4>
                <p>For the food buff</p>
                </div>
                <div className="credit-arrow">›</div>
            </div>

            <div className="credit-box">
                <div className="credit-icon">⛽</div>
                <div className="credit-text">
                <h4>Fuel Cards</h4>
                <p>For the motorhead</p>
                </div>
                <div className="credit-arrow">›</div>
            </div>

            </div>

        </div>


      </div>

      <div id="loans" className="selector-section">

  {/* TOP LIGHT CARD */}
  <div className="loans-top-card">

    <div className="loans-left">
      <span className="badge">open to learning intelligent repayments</span>

      <h2>Manage your Student Loan debt like a pro</h2>
      <h3>Crack the secret to lower EMIs with a Loan Balance Transfer</h3>

      <a href="#" className="learn-more">Learn More</a>
    </div>

    <div className="loans-right">
      <img src= {loan} alt="loan users" />
    </div>

  </div>

  {/* MAIN MAROON CARD */}
  <div className="loans-card">
    <div className="loans-card-top">
      <h2>Choose from loans for your specific requirements</h2>
      <button className="explore-btn light">Explore More</button>
    </div>

    <div className="loans-options">

      <div className="loan-box">
        <div className="loan-icon">💼</div>
        <div>
          <h4>Personal Loan</h4>
          <p>For your lifestyle</p>
        </div>
        <span>›</span>
      </div>

      <div className="loan-box">
        <div className="loan-icon">🏠</div>
        <div>
          <h4>Home Loan</h4>
          <p>For your peace</p>
        </div>
        <span>›</span>
      </div>

      <div className="loan-box">
        <div className="loan-icon">🚗</div>
        <div>
          <h4>Car Loan</h4>
          <p>For your joyous ride</p>
        </div>
        <span>›</span>
      </div>

      <div className="loan-box">
        <div className="loan-icon">🎓</div>
        <div>
          <h4>Education Loan</h4>
          <p>For your aspirations</p>
        </div>
        <span>›</span>
      </div>

    </div>

  </div>

      </div>

      <div id="investments" className="selector-section">
       

  {/* TOP HERO CARD */}
  <div className="invest-top-card">

    <div className="invest-left">
      <img src="/assets/poster.jpeg" alt="invest" />
    </div>

    <div className="invest-right">
      <span className="badge">open to learning for sustained growth</span>

      <h2>Smart moves, safer bets: Why diversification wins</h2>

      <h3 className="link-text">
        Sizing up the market: What are Large, Mid and Small Caps?
      </h3>

      <a href="#" className="learn-more">Learn More</a>
    </div>

  </div>
  </div>

  {/* MAIN CARD */}
  <div className="invest-card">

    <div className="invest-card-top">
      <h2>Choose from a variety of investment options</h2>
      <button className="explore-btn">Explore More</button>
    </div>

    <div className="invest-options">

      <div className="invest-box">
        <div className="invest-icon">📊</div>
        <div>
          <h4>Mutual Funds</h4>
          <p>For life goals</p>
        </div>
        <span>›</span>
      </div>

      <div className="invest-box">
        <div className="invest-icon">🏦</div>
        <div>
          <h4>Public Provident Fund</h4>
          <p>For safety</p>
        </div>
        <span>›</span>
      </div>

      <div className="invest-box">
        <div className="invest-icon">🥇</div>
        <div>
          <h4>Digital Gold</h4>
          <p>For diversification</p>
        </div>
        <span>›</span>
      </div>

      <div className="invest-box">
        <div className="invest-icon">👴</div>
        <div>
          <h4>National Pension System</h4>
          <p>For retirement</p>
        </div>
        <span>›</span>
      </div>

    </div>

  </div>



      <div id="deposits" className="selector-section">
        

  {/* TOP LIGHT CARD */}
  <div className="deposit-top-card">

    <div className="deposit-left">
      <span className="badge">open to learning for assured progress</span>

      <h2>The financial cushion you need in your life</h2>
      <h3>Cut your tax bills legally with this FD</h3>

      <a href="#" className="learn-more">Learn More</a>
    </div>

    <div className="deposit-right">
      <img src="/assets/OIP.jpeg" alt="family" />
    </div>

  </div>

  {/* MAIN MAROON CARD */}
  <div className="deposit-card">

    <div className="deposit-card-top">
      <h2>Choose from a range of consistently growing deposits</h2>
      <button className="explore-btn light">Explore More</button>
    </div>

    <div className="deposit-options">

      <div className="deposit-box">
        <div className="deposit-icon">🏦</div>
        <span>Fixed Deposit</span>
        <span>›</span>
      </div>

      <div className="deposit-box">
        <div className="deposit-icon">🔁</div>
        <span>Recurring Deposit</span>
        <span>›</span>
      </div>

      <div className="deposit-box">
        <div className="deposit-icon">🧾</div>
        <span>Tax Saver FD</span>
        <span>›</span>
      </div>

      <div className="deposit-box">
        <div className="deposit-icon">⚙️</div>
        <span>Auto FD</span>
        <span>›</span>
      </div>

    </div>

  </div>

</div>



      <div id="payments" className="selector-section">
         <div className="payments-wrapper">

    {/* LEFT SIDE */}
    <div className="payments-left">

      <h1>Payments made effortless</h1>
      <p>A simple click is what it takes now.</p>

      <div className="payments-grid">

        <div className="pay-box">
          <div className="icon">💳</div>
          <span>Bill Payments</span>
        </div>

        <div className="pay-box">
          <div className="icon">₹</div>
          <span>Digital Rupee</span>
        </div>

        <div className="pay-box">
          <div className="icon">🚗</div>
          <span>FASTag</span>
        </div>

        <div className="pay-box">
          <div className="icon">⚙️</div>
          <span>View All</span>
        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="payments-right">
      <img src="/assets/payment-girl.png" alt="payments" />
    </div>

  </div>

</div>
      

      <div id="plan" className="selector-section">
        {/* 🟣 EMI SECTION (FIRST) */}
  <div className="emi-section">

    <h1>Great plans start with well-calculated decisions</h1>

    <div className="emi-tabs">
      {["EMI Calculator", "FD Calculator", "SIP Calculator", "PPF Calculator"].map((tab, i) => (
        <span key={i} className={i === 0 ? "active" : ""}>{tab}</span>
      ))}
    </div>

    <div className="emi-card">

      <div className="emi-left">
        <h2>EMI Calculator</h2>
        <p>Discover how to turn your dreams into reality with an EMI Calculator.</p>

        <div className="input-group">
          <label>Loan Amount</label>
          <input
            type="range"
            min="50000"
            max="4000000"
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
          />
          <span>₹ {loan}</span>
        </div>

        <div className="input-group">
          <label>Interest Rate (%)</label>
          <input
            type="range"
            min="1"
            max="22"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <span>{rate}%</span>
        </div>

        <div className="input-group">
          <label>Tenure (Months)</label>
          <input
            type="range"
            min="12"
            max="84"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
          <span>{tenure} M</span>
        </div>

        <div className="emi-result">
          <h3>Your EMI</h3>
          <h1>₹ {Math.round(emi)}</h1>
          <button className="apply-btn">Get Instant Funds</button>
        </div>
      </div>

      <div className="emi-right">
        <div className="circle">
          <h4>Total Amount Payable</h4>
          <h1>₹ {Math.round(totalAmount)}</h1>
        </div>

        <div className="breakdown">
          <p>Principal: ₹ {loan}</p>
          <p>Interest: ₹ {Math.round(interest)}</p>
        </div>
      </div>

    </div>

  </div>


  {/* 🔴 CSR SECTION (SECOND) */}
  <div id="csr-section">

    <div className="csr-banner">

      <div className="csr-left">
        <h1><i>open</i> to the progress of all</h1>
        <p>Committed to our responsibility towards the society.</p>

        <div className="csr-stats">

          <div className="stat-box">
            <h2>2.05M+</h2>
            <p>Households Across India</p>
          </div>

          <div className="stat-box">
            <h2>100Cr+</h2>
            <p>National Cancer Grid (NCG)</p>
          </div>

          <div className="stat-box">
            <h2>3.27M+</h2>
            <p>Trees Planted</p>
          </div>

        </div>

        <button className="know-btn">Know More</button>
      </div>

      <div className="csr-right">
        <img src="/assets/kids.png" alt="csr" />
      </div>

    </div>

  </div>


      </div>

      <div className="safe-banking-banner">

  {/* LEFT SIDE */}
  <div className="safe-left">
    <div className="phone-shape">
      <div className="phone-screen">
        <div className="mask-icon">🎭</div>

        <div className="call-actions">
          <span className="accept"></span>
          <span className="reject"></span>
        </div>
      </div>

      <div className="warning-icon">!</div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="safe-right">
    <h2>
      <i>open</i> to Safe Banking
    </h2>

    <p>
      Learn how to identify and avoid frauds for a safer banking experience.
    </p>

    <button className="know-btn">Know More</button>
  </div>

</div>

    </section>


  )
}

export default AccountSelector