import gift from "../../../assets/gift.svg"

const Box=(props)=>{
    return(
<div className="box" id={props.id}>
        <div className="imgg">
         <img src={gift} className="img1"  alt="gift-img"/>
        </div>
            <h4 id={props.class}>{props.sucess} Success Rate</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eos quaerat officiis cupiditate porro! Maxime provident natus.</p>
            <button id="bttn">Read More</button>
    </div>);
};

const Why=()=>{
    return(<div className="why">
        <h1>Why Choose us?</h1>
        <div className="gift">

        <Box sucess="98%"/>
        <Box id="boxe" sucess="100%" class="one_one"/>
        <Box sucess="99%"/>

    </div>
    </div>
    );
};

export default Why;