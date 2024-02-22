import logo_one from "../../../assets/igstudiologo.svg"
import Instra from  "../../../assets/instra-Icon.svg"
import facebook from "../../../assets/facebook.svg"
import Xcon from "../../../assets/Xcon.svg"
import pireted from "../../../assets/pireted.svg"

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
     <img src={Xcon} alt="icon"/>
     <img src={pireted} alt="icon"/>
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