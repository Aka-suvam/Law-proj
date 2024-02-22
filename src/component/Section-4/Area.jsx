import Businesslaw from "../../../assets/BusinessLaw.svg";
import partnership from "../../../assets/partnershipLaw.svg";

import realstate from "../../../assets/Realestate.svg";
import Business from "../../../assets/Business2.svg";
import landlord from "../../../assets/landlord.svg";
import elder from "../../../assets/Elder.svg";

const Area=()=>{
    return(<div className="area">
        <h1>Area of Practices</h1>
        <div className="flex-img">
        <img src={Businesslaw} alt="busi-law-pic"/>
        <p className="bus-law">Business Law</p>
        <img src={partnership} alt="partnership-pic"/>

        <p className="partner-law">Partnership LAW</p>
       <img src={realstate} alt="real-state-pic"/>
        <p className="estate">REAL ESTATE LAW</p>
        

        <img src={Business} alt="Business-pic"/>
        <p className="buss">BUSINESS LAW</p>
        <img src={landlord} alt="landlord-pic"/>
        <p className="landlord">LANDLORD DISPUTES</p>
        <img src={elder} alt="elder-pic"/>
        <p className="elder">ELDER ABUSE</p>
        </div>

    </div>);
};

export default Area;