import "../style.css";   // 👈 global CSS 



function Footer() {
  return (
    <>
    <div className="footer-top">
      <div className="footer-container">

        <div className="footer-grid">

          <div>
            <h4>Get In Touch</h4>
            <p className="footer-link">Contact Us</p>

                <p>
                    Axis Bank Customer Care 1800 209 5577 / 1800 103 5577 (Toll-free), 
                    1860 419 5555 / 1860 500 5555 (Charges applicable as per service provider)
                </p>

                <p>
                    WhatsApp Banking:<br />
                    WhatsApp “Hi” to 7036165000
                </p>

                <p className="footer-link">Missed Call Service (Toll Free)</p>
                <p className="footer-link">SMS Banking</p>
                <p className="footer-link">NRI Phone Banking Numbers</p>
                <p className="footer-link">Axis Bank Branch Locator</p>
                <p className="footer-link">Complaints and Grievance Redressal</p>
                <p className="footer-link">Report A Fraud</p>
                <p className="footer-link">Whistleblower Policy</p>
                <p className="footer-link">Do Not Call Registry</p>
                <p className="footer-link">CDSL/NSDL Investor Grievance Escalation Matrix</p>

                <p>
                    To get an account balance instantly:<br />
                    SMS BAL to 56161600 / 9951 860 002
                </p>
                <h5 className="sub-heading">PNO / NODAL Desk</h5>

                <p className="footer-link">
                Level 1 - Queries, Request or Complaint Redressal
                </p>

                <p className="footer-link">
                Level 2 - Write to Nodal Officer
                </p>

                <p className="footer-link">
                Level 3 - Write to Principal Nodal Officer - (PNO@axisbank.in)
                </p>
          </div>

           {/* COLUMN 2 */}
          <div>
            <h4>Shareholder's Corner</h4>
             <p className="footer-link">Stock Information</p>
                <p className="footer-link">Regulatory Disclosures</p>
                <p className="footer-link">Shareholder's Information</p>
                <p className="footer-link">Financial Results & Other Presentations</p>
                <p className="footer-link">Corporate Governance</p>
                <p className="footer-link">Compliance Calendar</p>
                <p className="footer-link">Investor FAQs</p>
                <p className="footer-link">Investor Contacts</p>
                <p className="footer-link">Disclosure under Regulation 46</p>
                <p className="footer-link">Disclosure under Regulation 62</p>
                <p className="footer-link">
                    Extract of Board Approved Policy on Co-Lending Model
                </p>
                <p className="footer-link">
                    Board Note & Guidelines - Resolution Framework 2.0
                </p>
          </div>

           {/* COLUMN 3 */}
          <div>
            <h4>Media Center</h4>
            <p className="footer-link">Corporate Profile</p>
            <p className="footer-link">Vision & Values</p>
            <p className="footer-link">Awards & Recognition</p>
            <p className="footer-link">Press Releases</p>
            <p className="footer-link">Gallery</p>

            <h5 className="sub-heading">Downloads</h5>

            <p className="footer-link">Download Forms</p>
            <p className="footer-link">Download Product Guide</p>
            <p className="footer-link">Download E-Brochures</p>
            <p className="footer-link">Investment Knowledge Bank</p>
            <p className="footer-link">
                Customer Education Literature on NPA and SMA classification
            </p>
            <p className="footer-link">Offers T&C</p>
            <p className="footer-link">Fees & Charges</p>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4>Other Links</h4>
            <p className="footer-link">Careers</p>
            <p className="footer-link">Sustainability & CSR</p>
            <p className="footer-link">Our ESG Profile</p>
            <p className="footer-link">Fraud Awareness</p>
            <p className="footer-link">Services for Customer with Disabilities</p>
            <p className="footer-link">DigiSaathi Helpline</p>
            <p className="footer-link">Digital Lending Products</p>
            <p className="footer-link">Sitemap</p>
            <p className="footer-link">RBI Kehta Hai</p>
            <p className="footer-link">RBI Sachet Portal</p>
            <p className="footer-link">RBI Udgam</p>
            <p className="footer-link">RBI Integrated Ombudsman Scheme, 2021</p>
            <p className="footer-link">PAN AADHAAR Linking</p>
            <p className="footer-link">Aadhaar Enrolment Centres</p>
            <p className="footer-link">Premise for Branch</p>
            <p className="footer-link">Account Aggregator</p>
            <p className="footer-link">Auction Notices</p>
            <p className="footer-link">Bank Terminated Vendors</p>
            <p className="footer-link">Comprehensive Notice Board</p>
            <p className="footer-link">Sanction Policy Statement</p>
            <p className="footer-link">IBC Disclosures</p>
            <p className="footer-link">Positive Pay System</p>
            <p className="footer-link">Continuous Clearing in CTS</p>
            <p className="footer-link">
                Secured Assets possessed under the SARFAESI Act, 2002
            </p>
          </div>
          </div>
          </div>
          </div>


       { /* ===== DARK FOOTER (SEPARATE) ===== */}
          <div className="footer-bottom">
             <div className="footer-container">

                {/* ROW 1 */}
                <div className="footer-row">
                <span className="label">Our Offerings :</span>
                <p>
                    Savings Account | Digital Savings Account | Digital Current Account | Current Account |
                    Digital FD | FD | FD Interest Rates | Credit Card | Personal Loan | Car Loan | Home Loan |
                    Education Loan | 24x7 Loans | Loan Against Securities | PPF Account | Digital Gold |
                    Mutual Fund | FASTag | Internet Banking | Forex Card
                </p>
                </div>

                <div className="footer-row">
                <span className="label">Calculators :</span>
                <p>
                    Average Balance Calculator | EMI Calculator | FD Calculator | RD Calculator |
                    Personal Loan EMI Calculator | Home Loan EMI Calculator | SIP Calculator
                </p>
                </div>

                <div className="footer-row">
                <span className="label">Axis Group :</span>
                <p>
                    Axis Bank Foundation | Axis Mutual Fund | Axis Securities Limited |
                    Axis Finance | Axis Pension Fund | Axis Trustee | Axis Capital | Freecharge
                </p>
                </div>

                {/* DISCLAIMER */}
                <div className="footer-disclaimer">
                <p>
                    Site best viewed in Chrome, Edge, Firefox, Safari at 1024x768 resolution.
                </p>
                <p>
                    Do not share banking details with unknown sources. Beware of fraudulent offers.
                </p>
                </div>

                {/* FOLLOW + BUTTON */}
                <div className="footer-actions">

                <div className="social">
                    <span>Follow us on:</span>
                    <div className="icons">
                    <span>🌐</span>
                    <span>🐦</span>
                    <span>▶️</span>
                    <span>💼</span>
                    <span>📸</span>
                    </div>
                </div>

                <button className="fraud-btn">⚠️ Report A Fraud</button>

                <div className="dicgc">
                    <span>DICGC</span>
                    <p>Axis Bank is registered with DICGC</p>
                </div>

                </div>

            </div>

            {/* LAST STRIP */}
            <div className="footer-last">
                <div className="footer-container last-flex">

                <div className="logo">AXIS BANK</div>

                <div className="links">
                    <span>Disclaimer</span>
                    <span>Privacy Policy</span>
                    <span>Code of Commitment</span>
                    <span>Responsible Disclosure Policy</span>
                </div>

                <div className="copy">
                    Copyright © 2026 Axis Bank
                </div>

                </div>
            </div>

</div>
</>
  );
}

export default Footer