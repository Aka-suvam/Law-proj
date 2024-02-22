import arrow from "../../../assets/arrow.svg";
import arrow2 from  "../../../assets/arrow2.svg"
import face from "../../../assets/face1.svg"
import emg from "../../../assets/emg.svg"
import facee from "../../../assets/facee.svg"
const Big=(porps)=>{
    return(
    <div className="big-container" id={porps.id}>
    <div className="imma">
    <img src={porps.imi} alt="face-img" />
    </div>
    <p className="name">{porps.name}</p>
    <p className="ceo">Ceo of Hunt</p>
    <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos saepe, nemo molestias eos nam commodi blanditiis in mollitia optio consequatur esse.</p>
</div>);
};

const What=()=> {
    return(<div className="what">
<div className="what1">
<h1>What says our happy Clients</h1>
<div className="arrow">
    <div className="immge">
        <img src={arrow} alt="arrow-img" />
    </div>
    <div className="immge" id="img1">
        <img src={arrow2} alt="arrow-img" />
    </div>
</div>
</div>
<div className="flex-image">
    <Big name="Devon Lane" imi={face}/>
    <Big id="uniq" name="Jane Cooper" imi={facee} />
    <Big name="Robert Fox"  imi={emg}/>

</div>

    </div>);
};







export default What