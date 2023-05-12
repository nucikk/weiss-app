import "../style/footer.css";
import careerImage from "../image/footer-Image.png"
const Footer = () => {
  return (
    <>
    <div className="footer_section">
        <div className="career_info">
             <h3 className="career_title">Mach Karriere bei uns</h3>
             <h2 className="career_heading">Bewirb dich bei uns</h2>
             <p className="career_overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <button className="career_button">Karriere</button>
        
        <div className="career_image">
            <img src={careerImage}/>
        </div>
  
        </div>

    </div>
    <div className="footer_wrap">

    </div>
    </>

  )
}

export default Footer