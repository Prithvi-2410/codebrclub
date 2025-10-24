import React from "react";

import "./App.css";

import { 

  FaLock, FaLayerGroup, FaExchangeAlt, FaCheck, 

  FaMicrochip, FaPalette, FaShieldAlt, FaBolt, FaUsers, FaTachometerAlt, FaRoute, FaCode, FaDatabase, FaPowerOff, FaUserCircle, FaPlus, 

  FaBtc, FaEthereum, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGlobe, FaLink, FaFingerprint, FaFileContract 

} from "react-icons/fa";





function App() {

  return (

    <>

      <header className="container">

        <div className="logo">VETRIC</div>

        <nav>

          <ul>

            <li><a href="#">Home</a></li>

            <li><a href="#">Pricing</a></li>

            <li><a href="#">Features</a></li>

            <li><a href="#">Contact</a></li>

          </ul>

        </nav>

        <div className="auth-buttons">

          <a href="#" className="login">LOGIN</a>

          <a href="#" className="signup-btn">SIGN UP</a>

          <button className="menu-toggle">▼</button>

        </div>

      </header>





      <section className="hero">

        <h1 className="container">Build the Future with Web</h1>

        <p className="container">Discover how we can help you connect with the next generation of the internet.</p>

        <div className="hero-actions">

          <a href="#" className="btn primary-btn">SIGN UP &gt;</a>

          <a href="#" className="btn secondary-btn">Get Started</a>

        </div>

      </section>





      <section className="features container">

        <p>Discover how we can help you connect with the next generation of the internet:</p>

        <div className="features-grid">

          <div className="feature-item">

            <div className="icon"><FaLock /></div>

            <h3>Securely Interact</h3>

            <p>The protocols are decentralized and open source, meaning they are secure.</p>

          </div>

          <div className="feature-item">

            <div className="icon"><FaLayerGroup /></div>

            <h3>Seamlessly Integrate</h3>

            <p>Digitally connect the web world with our easy to use SDK's and APIs.</p>

          </div>

          <div className="feature-item">

            <div className="icon"><FaExchangeAlt /></div>

            <h3>Exchange assets</h3>

            <p>Exchange assets easily and securely between different networks.</p>

          </div>

        </div>

      </section>





      <section className="logo-bar container">

        <span className="logo-ipsum">Logoipsum</span>

        <span className="logo-ipsum">#logoipsum</span>

        <span className="logo-ipsum">logo ipsum</span>

        <span className="logo-ipsum">logo ipsum</span>

        <span className="logo-ipsum">LOGOIPSUM</span>

        <span className="logo-ipsum">Logoipsum</span>

      </section>





      <section className="pricing">

        <div className="container">

          <h2>Pricing</h2>

          <p className="pricing-subtext">Explore our pricing plans tailored to fit your needs.</p>

          <div className="toggle-switch">

            <span>Annually</span>

            <div className="switch"></div>

            <span>Monthly</span>

          </div>





          <div className="pricing-cards">

            <div className="card basic">

              <h3>Basic</h3>

              <div className="price">

                <span className="dollar">$</span>9.99<span className="duration">/month</span>

              </div>

              <p className="tagline">Essential features for beginners.</p>

              <a href="#" className="btn get-started">Get Started with Basic &gt;</a>

              <ul>

                <li><FaCheck /> Basic Platform Access</li>

                <li><FaCheck /> Email Support</li>

                <li><FaCheck /> Limited Data Storage</li>

              </ul>

            </div>





            <div className="card pro featured">

              <span className="badge">Most Popular</span>

              <h3>Pro</h3>

              <div className="price">

                <span className="dollar">$</span>19.99<span className="duration">/month</span>

              </div>

              <p className="tagline">Advanced tools for growth.</p>

              <a href="#" className="btn get-started pro-btn">Get Started with Pro &gt;</a>

              <ul>

                <li><FaCheck /> Full Platform Access</li>

                <li><FaCheck /> Email and Chat Support</li>

                <li><FaCheck /> Unlimited Data Storage</li>

              </ul>

            </div>





            <div className="card premium">

              <h3>Premium</h3>

              <div className="price">

                <span className="dollar">$</span>29.99<span className="duration">/month</span>

              </div>

              <p className="tagline">Top-tier support and customization.</p>

              <a href="#" className="btn get-started">Get Started with Premium &gt;</a>

              <ul>

                <li><FaCheck /> Advanced Platform Access</li>

                <li><FaCheck /> 24/7 Support via Chat and Phone</li>

                <li><FaCheck /> Customized Features</li>

              </ul>

            </div>

          </div>

        </div>

      </section>





      <section className="cta-banner">

        <div className="container">

          <h3>Unlock the Power of Web3 Today!</h3>

          <p>Join us on the journey to the decentralized future.</p>

          <a href="#" className="btn primary-btn small-btn">Get Started &gt;</a>

        </div>

      </section>





      <section className="feature-grids container">

        <h2 className="section-title-light">Discover the powerful features that make our platform stand out</h2>





        <div className="grid-row top-row">

          <div className="grid-card ready-to-go">

            <h3>Ready to go services</h3>

            <p>Streamlining solutions for swift success</p>

            <div className="tag-cloud">

              <span className="tag"><FaMicrochip /> Powerful APIs</span>

              <span className="tag"><FaPalette /> Re-Design</span>

              <span className="tag"><FaShieldAlt /> Cybersecurity</span>

              <span className="tag"><FaBolt /> Secure</span>

              <span className="tag"><FaUsers /> Collaborative teams</span>

              <span className="tag"><FaTachometerAlt /> Safe Space</span>

              <span className="tag"><FaRoute /> Router</span>

              <span className="tag active"><FaCode /> All Teams</span>

              <span className="tag"><FaDatabase /> Database</span>

              <span className="tag"><FaShieldAlt /> Cybersecurity</span>

              <span className="tag"><FaPowerOff /> Power</span>

            </div>

          </div>





          <div className="grid-card growing-teams">

            <h3>For growing teams</h3>

            <p>Tailored support to give you progress</p>

            <div className="user-creator">

              <div className="user-icon"><FaUserCircle /></div>

              <div className="plus-icon"><FaPlus /></div>

              <p>Create user for this team</p>

            </div>

          </div>

        </div>





        <div className="grid-row bottom-row">

          <div className="grid-card powerful-apis">

            <h3>Powerful APIs for developers</h3>

            <p>Seamless integration for your company</p>

            <pre>

              <code>{`// Smart Licence Identifier: #17

const contractAddress = "0x1dDB...2F"

const provider = new ethers.JsonRpcProvider()

const wallet = new ethers.Wallet(privateKey, provider)

const contract = new ethers.Contract(contractAddress, abi, wallet)





contract.purchase(

 "VETRIC-2024",

 "Product-Licence",

 "#VALID-KEY"

)`}</code>

            </pre>

          </div>





          <div className="grid-card blockchains">

            <h3>The best blockchains out there</h3>

            <p>Pioneering paths in decentralized solutions</p>

            <div className="blockchain-logos">

              <div className="logo-circle ava">A</div>

              <div className="logo-circle btc"><FaBtc /></div>

              <div className="logo-circle eth"><FaEthereum /></div>

              <div className="logo-circle sol"></div>

              <div className="logo-circle bnb">B</div>

              <div className="logo-circle pol">P</div>

            </div>

          </div>





          <div className="grid-card web3-dev">

            <h3>Web 3.0 development</h3>

            <p>Crafting tomorrow's digital landscape today</p>

            <div className="tag-cloud-small">

              <span className="tag-s">Web 3.0 Development</span>

              <span className="tag-s">Growth</span>

              <span className="tag-s">APIs</span>

              <span className="tag-s">Go to Market Solutions</span>

              <span className="tag-s">Easy-to-use Interface</span>

              <span className="tag-s">Scalable</span>

              <span className="tag-s">Fast Integrations</span>

              <span className="tag-s">Accessibility</span>

            </div>

          </div>

        </div>

      </section>





      <section className="contact-form container">

        <p className="contact-intro">Contact us for additional details or assistance.</p>

        <form action="#" method="POST">

          <input type="text" name="name" placeholder="Name" required />

          <input type="email" name="email" placeholder="Email" required />

          <textarea name="message" placeholder="Add your message" required></textarea>

          <button type="submit">Submit</button>

        </form>

      </section>





      <footer>

        <div className="container">

          <div className="footer-top">

            <div className="footer-logo">VETRIC</div>

            <div className="social-links">

              <a href="#"><FaTwitter /></a>

              <a href="#"><FaLinkedinIn /></a>

              <a href="#"><FaInstagram /></a>

              <a href="#"><FaYoutube /></a>

              <a href="#"><FaGlobe /></a>

            </div>

          </div>





          <div className="footer-bottom">

            <p>© VETRIC. 2024</p>

            <div className="feature-links">

              <a href="#" className="feature-link"><FaLink /> Cross Chain Access</a>

              <a href="#" className="feature-link"><FaFingerprint /> Decentralized Identity</a>

              <a href="#" className="feature-link"><FaFileContract /> Smart Contract Automation</a>

            </div>

          </div>

        </div>

      </footer>

    </>

  );

}





export default App;