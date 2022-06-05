import React,{useState} from 'react'
import heart from '../assets/heart-solid.svg'

function Card(props){
  console.log("the props contain following things :- ", props);
let favorites=useState("Add to favorite");//this will return an array.useState has 2 values:one is state and other is function
let activeClass=useState("");
/*lets set the state 
can be writed in two ways first one is,
let favbtnText=favorites[0];
let setFavorite=favorites[1]; or can be write as destructuring*/

let [btnTextState,setbtnTextState]=favorites; 
let[classState,setclassState]=activeClass;//destructuring for active class state

//lets change/modify the state
function addToFavorite(imgsrc){ //img is passing as argument
  setbtnTextState((previousState)=>{     //passing another function (previousState) inside (setbtnTextState
  
    if(previousState=== "Add to favorite") {
          props.favImagefunction(imgsrc);      //getFavImages function is defined in App.js and img is passed inside props
          return "Added to favorite";
    }
  else{
    return "Add to favorite"
    props.RemoveImagefunction(imgsrc);
   
  }
 });

 setclassState((previousClass)=>{
   if( previousClass=== ""){
     return "active";
   }else{
     return "";
   }

 })
}

  return(
    <div className={`card ${classState}`}>
      <img src={heart} className="icon"/>
      <img src={props.cardContent.imgsrc}/>
      <h3>{props.cardContent.name}</h3>
      <p>Ph:{props.cardContent.phone}</p>
      <p>Email:{props.cardContent.email}</p>
      <button 
        onClick={ ()=> {
            addToFavorite(props.cardContent.imgsrc); // inside arrow function write function and pass img as argument ,to pass property we use callback function
      }}>
      {btnTextState}</button>

      {/* <button btn1 onClick={addToFavorite}>{btnTextState}</button> */}
    </div>
  )
}
export default Card;

//destructuring example
/*let myData={
  name:"web diary",
  year:"1",
  place:"tly"
};

/* myData.name;
myData.year;
myData.place*/
//instead of calling this way we can do destructuring ie,
/*let{name,year,place}=myData;
console.log(name);*/
