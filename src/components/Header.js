import React from "react";
function Header() {
  let time=new Date();
let hours= time.getHours();
let mode ="";
  console.log(hours);
  if (hours > 15) {
  mode = "nightMode";
  }
  else if (hours < 15){
    mode = "dayMode";
}




  return (
    <header className={`display-flex ${mode}`}>
      <div className="logo">Logo</div>
      <ul className="nav display-flex">
        <li>
          {" "}
          <a href="">Home</a>
        </li>
        <li>
          {" "}
          <a href="">Contact</a>
        </li>
        <li>
          {" "}
          <a href="">About</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
