import "../style/footer.css";
import careerImage from "../image/footer-Image.png";
import footerLogo from "../image/Weiss-Logo-white.svg";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="career_info">
          <h3 className="career_title">Mach Karriere bei uns</h3>
          <h2 className="career_heading">Bewirb dich bei uns</h2>
          <p className="career_overview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <button className="career_button">Karriere</button>

          <div className="career_image">
            <img src={careerImage} />
          </div>
        </div>
      </div>
      <div className="footer_article">
        <div className="footer_card">
          <div className="footer_category">
            <img src={footerLogo} />

            <div className="footer_intro">
              <div className="intro_left_text">
                <h3>Geschäftsführer</h3>
                <p>Beratender Ingenieur Dipl.-Ing. Klaus Weiss</p>
              </div>
              <div className="intro_right_text">
                <h3>Adresse</h3>
                <p>Straßenname 7 12345 Stadt</p>
              </div>
            </div>
          </div>
          <div className="footer_data_protection">Impressum | Datenschutz</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
