function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="container">
        <div className="top-left">
          <a className="active">Personal</a>
          <a>Business</a>
          <a>Corporate</a>
          <a>Burgundy</a>
          <a>Priority</a>
          <a>NRI</a>
          <a>Agri</a>
          <a>Gift City</a>
        </div>

        <div className="top-right">
          <a>About Us</a>
          <i className="fa-solid fa-location-dot"></i>
          <i className="fa-solid fa-phone"></i>
          <i className="fa-solid fa-sun"></i>
          <i className="fa-solid fa-moon"></i>
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar