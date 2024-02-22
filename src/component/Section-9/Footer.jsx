import logo_one from "../../../assets/igstudiologo.svg"
import Instra from  "../../../assets/instra-Icon.svg"
import facebook from "../../../assets/face-icon.svg"
import x from "../../../assets/x.icon.svg"
import p from "../../../assets/pireted-icon.svg"

const Footer=()=>{
    return (
    <footer>
    <div className="logo_1">
        <img src={logo_one} alt="logo_pic" />
        <p id="logo_para">Igstudio</p>
    </div>
    <div className="nav_link">
        <ul>
            <li>Home</li>
            <li>Attorneys</li>
            <li>Practise Area</li>
            <li>About us</li>
        </ul>
    <div className="logo_icons">
     <img src={Instra} alt="icon"/>
     <img src={facebook} alt="icon"/>
     <img src={x} alt="icon"/>
     <img src={p} alt="icon"/>
    </div>
      <div className="small_text">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        </div>  
    </div>
    
    </footer>);
};

export default Footer;