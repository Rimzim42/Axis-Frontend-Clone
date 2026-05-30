function SecondNavbar() {
  return (
    <div className="second-navbar">
      <div className="logo-section">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg" />
      </div>

      <div className="nav-content">
        <div className="search-box">
          <i className="fa-solid fa-microphone"></i>
          <input type="text" placeholder="What are you looking for today?" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="nav-buttons">
          <a className="support">Support</a>
          <a className="complaint">Lodge a Complaint</a>
          <button className="open-account">Open Digital A/C</button>
          <button className="login-btn">
            Login <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SecondNavbar