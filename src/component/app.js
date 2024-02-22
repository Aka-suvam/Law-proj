import React from "react";
import  ReactDOM  from "react-dom/client";
import Header  from "./Section-one/Header"
import Right from "./Section-one/Right";
import Left from "./Section-one/Left";
import Insto from "./Section-two/Intro";
import Why from "./Section-three/Why";
import Area from "./Section-4/Area";
import What from "./Section-5/What";
import Team from "./Section-6/Team";
import Faq from "./Section-7/Faq";
import Sub from "./Section-8/Sub";
import Footer from "./Section-9/Footer";

const App=()=>{
return (<main> 
    <section className="one">
    <Header/>
    <div className="content">
    <Left/>
    <Right/>
    </div>
</section>
<section className="two">
<Insto/>
</section>
<section className="three">
    <Why/>
</section>
<section className="four">
    <Area/>
</section>
<section className="five">
    <What/>
</section>
<section className="six">
    <Team/>
</section>
<section className="seven">
    <Faq/>
    
</section>
<section className="eight">
    <Sub/>
</section>
<Footer/>
</main> );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);