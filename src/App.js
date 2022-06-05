import React,{useState}from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Hero from './components/Hero';
import "./style.css";
import Card from './components/Card';
import CardData from './components/CardData';


/* example for mapping
let numbers=[1,2,3,4];  (created an array called numbers. and map function is used when we have to do operation by taking each element in the array)
  let result=numbers.map( (number) => {   //passed a parameter called number,it is similar to loop
  let doubleNumber=number*2;
  return doubleNumber;  //the value of the operation is stored in result.
});
console.log(result);

output-2,4,6,8*/
//to link getfavimages in app.js and card.js we use props




//a functional component
function MyApp(){

   




  let card=CardData.map((cardItem)=>{
  return <Card 
              cardContent = {
                             {
                              imgsrc:cardItem.imgsrc,
                              name:cardItem.name,
                              phone:cardItem.phone,
                              email:cardItem.email
                              }
                           }
                    
              
          />//(cardContent is an attribute and object{imgsrc...to email}is passed),two {{}}is given first is we are gng to write js and the scnd one is to write object.

  });


  return(
    <div>
  <Header/>
  <Hero/>
  <div className="card-container"> {card}</div>
  <aside >
    <h3>Favorites</h3>
    
  </aside>
  <Footer/>
  </div>
  );
  
  }
  export default MyApp;

  /* example of filter
  let places=["tly","knr","clt"]
let removeplace="tly"
let updatedplace=places.filter((place)=>{
  if(place !== removeplace){
    return place
  }
})
console.log(updatedplace)
*/



  /* example of filter another way
  let places=["tly","knr","clt"]
let removeplace="tly"
let updatedplace=places.filter((place)=>{
   return place !== removeplace
})
console.log(updatedplace)
*/

/* example of filter removing list of places
  let places=["tly","knr","clt","kochi"]
let removeplace=["tly","knr"]
let updatedplaces=places.filter((place)=>{
   return !removeplace.includes(place)
})
console.log(updatedplaces)
*/