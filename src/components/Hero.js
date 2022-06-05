import React from 'react'
import background from "../images/img2.jpg"
function Hero(){

  // let welcomemsg="variable must be write in braces";
  // let mode="& can combine using template literals";


  let welcomemsg="Welcome to";
 let mode="Gods own country";
  let styles={
    color:"white",
    textShadow:"1px 1px 5px #000000",

  }

  return(
  <div className="hero">
  <h6 style={styles}>
  {`${welcomemsg}  ${mode}`}
  </h6>
  </div>
);
}
export default Hero;
//for inline css 2 {} is needed and inline style can be writed in 2 ways.