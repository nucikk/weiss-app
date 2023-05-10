import "../style/history.css";
import historyImage from "../image/history-Image.png";
const History = () => {
  return (
    <div className="history_container">
      <div className="historiography">
        <div className="historiography_overview">
          <h3 className="historiography_title">Unsere Firmenhistorie</h3>
          <h2 className="historiography_about">
            Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein
            Ingenieurbüro.
          </h2>
          <p className="historiography_news">
            Fast 30 Jahre lang führte er es als Alleininhaber. 1998 trat Sohn
            Klaus weiss als Stellvertreter an die Seite seines Vaters. Seit 2006
            ist Diplom-Ingenieur Klaus Weiss alleiniger Geschäftsführer
          </p>
          <div className="historiography_line"></div>
          <a className="link_primary" href="#">
            Lesen Sie weiter
          </a>

          <img className="history_img" src={historyImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default History;
