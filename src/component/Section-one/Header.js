
  // Import the SVG file
  import Logo from '../../../assets/igstudiologo.svg';
const Header=()=>{
    return (
           <header>
            <div className="weblogo">
            <div className="img">
            <img src={Logo} alt="logo" /> {/* Use the imported SVG file */}
            </div>
            <h6 className="text">IGSTUDIO</h6>
            </div> 
            <nav>
            <ul>
                <li>Home</li>
                <li>Attorneys</li>
                <li>Practice Areas</li>
                <li>About Us</li>
                
            </ul>
            </nav>
            <div className="contact">Contact Now</div>
    </header>);
};

export default Header;