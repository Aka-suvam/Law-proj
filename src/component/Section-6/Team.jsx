import ellipse from "../../../assets/Ellipse-15.svg"
import collen from "../../../assets/collen.svg" 
import sanfole from "../../../assets/sanfole.svg" 
import ces from "../../../assets/ces.svg" 
import hade from "../../../assets/hade.svg" 
import nik from "../../../assets/nik.svg" 

const Box=(porps)=>{
   return (
   <div className="boxe1" id={porps.id}>
   <div className="img_1">
     <img src={porps.emg} alt="icon"/>
   </div>
   <div className="para-text">
     <h4>{porps.name}</h4>
     <p>{porps.case}</p>
   </div>
</div>);
};

const Team=()=>{
    return(<div className="team">
<h1>Our Team</h1>
<div className="flex-box">
<Box  emg={ellipse} name="Danial Def" case="301 Cases"/>
<Box  emg={sanfole} id="uniqe" name="Sanfole" case="850 Cases"/>
<Box  emg={collen} name="Cesforila" case="470 Cases"/>
<Box  emg={ces} name="Colleen" case="180 Cases"/>
<Box  emg={hade} name="Haldone" case="212 Cases"/>
<Box  emg={nik} id="lefte" name="Nik Jeo" case="350 Cases"/>  
  
 </div>
 </div>);
};


export default Team;

