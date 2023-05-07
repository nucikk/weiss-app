import "../style/hero.css";
import heroRectangleImage from "../image/hero-image.png";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_left">
        <div className="hero_content">
          <h4 className="hero_title">Ingenieur Dieter Weiss</h4>
          <h2>Ingenieurbüro für Bau- und Vermessungswesen</h2>
          <p className="hero_text">
            Wenn Sie zuverlässige Ingenieure brauchen – das Ingenieurbüro Dieter
            Weiss ist Garant für den Er­folg Ihrer Projekte.
          </p>
          <button className="hero_btn">Ihr Projekt mit uns</button>
        </div>
      </div>
      <div className="hero_right">
        <img src={heroRectangleImage} alt="Company photo in the hero section" />
      </div>
    </div>
  );
};

export default Hero;
