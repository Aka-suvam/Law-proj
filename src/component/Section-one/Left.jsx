import email from "../../../assets/email-icon.svg"


const Left=()=>{
    return(
    <div className="left">
        <h1 className="leftheading">You don’t have to Fight them Alone.</h1>
        <p className="leftpara">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias in facere animi velit, fugiat autem, hic fugit repudiandae, minima quo nisi! Provident, aspernatur nulla? Minus corporis consequatur repudiandae quae aliquid?</p>
  <div className="input_form">
    <form>
    <input type="email" id="email" placeholder="Enter your email address   "/>
    <img src={email} id="email_icon" alt="email-icon" />
    <button className="let_talk">Let’s Talk</button>
  {/*<input type="submit"/>*/ }
    </form>
  </div>

    </div>
    );
};


export default Left;