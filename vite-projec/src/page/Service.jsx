import "../style/Service.css";
import informativeData from "../components/informative-data";
import History from "./History";

const Service = () => {
  return (
    <>
      <div className="service_container">
        <div className="service_content">
          <div className="service_description">
            <h4>Unsere Dienstleistungen</h4>
            <p>
              Dienstleistung ist für unsere Mitarbeiter Herausforderung, das ist
              die Stärke unseres Teams. Ganz gleich, ob Verkehrsplanungen, Ver-
              und Ent­sorgung, Lärmschutz oder Spezialgebiete – wir bieten
              Rundum-Service mit:
            </p>
          </div>
          <div className="service_article">
            {informativeData.map((item) => (
              <div className="informative_box" key={item.id}>
                <img src={item.photo} alt={item.title} />

                <div className="informative_content">
                  <h3>{item.title}</h3>
                  <p className="informative_description">{item.description}</p>
                  <a className="informative_link" href="#">
                    {item.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <History />
        </div>
      </div>
    </>
  );
};

export default Service;
