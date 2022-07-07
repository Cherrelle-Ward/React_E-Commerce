const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h3>Socials</h3>
          <div className="footer-icon-container">
            <li>
              <a
                href="https://www.tiktok.com/@trapkitchenn?lang=en"
                target="_blank"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/trapkitchen.mcr/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </div>
        </div>

        <div className="footer-item">
          <h3>Company</h3>
          <ul>
            <a href="#about-container">
              <li>About</li>
            </a>
            <a href="#contact-information-container">
              <li>Contact Us</li>
            </a>
            <a
              href="https://www.google.com/search?hl=en-GB&gl=uk&q=Trap+Kitchen+MCR,+4+Hillkirk+St,+Manchester+M11+3EZ&ludocid=5409447188271551611&lsig=AB86z5VvNIDqhTxodyK9uqYzFGuu#lrd=0x487bb13e876a2e33:0x4b12378ea829547b,1,,,"
              target="_blank"
            >
              <li>Reviews</li>
            </a>
            <a
              href="https://www.google.com/search?hl=en-GB&gl=uk&q=Trap+Kitchen+MCR,+4+Hillkirk+St,+Manchester+M11+3EZ&ludocid=5409447188271551611&lsig=AB86z5VvNIDqhTxodyK9uqYzFGuu#lrd=0x487bb13e876a2e33:0x4b12378ea829547b,3,,,"
              target="_blank"
            >
              <li>Leave a Review</li>
            </a>
          </ul>
        </div>
        <div className="footer-item">
          <h3>Got a Question?</h3>
          <ul>
            <li>
              Ask it{" "}
              <span>
                <a
                  href="https://www.google.com/search?q=Trap+Kitchen+MCR%2C+4+Hillkirk+St%2C+Manchester+M11+3EZ&oq=trap+kitchen+&aqs=chrome.0.69i59l2j69i57j35i39j46i67i175i199j0i67j69i61l2.4170j0j7&sourceid=chrome&ie=UTF-8#lpqa=a,,d,1"
                  target="_blank"
                >
                  {" "}
                  HERE{" "}
                </a>
              </span>
            </li>
            <li>
              Or check our FAQ's{" "}
              <span>
                <a
                  href="https://www.google.com/search?q=Trap+Kitchen+MCR%2C+4+Hillkirk+St%2C+Manchester+M11+3EZ&oq=trap+kitchen+&aqs=chrome.0.69i59l2j69i57j35i39j46i67i175i199j0i67j69i61l2.4170j0j7&sourceid=chrome&ie=UTF-8#lpqa=d,2"
                  target="_blank"
                >
                  HERE
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
