import React from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let imgdata = imageData();
  console.log(imgdata);
  // code here
  return (
  <div className='App'>
    <h1>  Kalvium gallery    </h1>  
    <div className='image'>

      <img src={imgdata[0].img}/>
      <img src={imgdata[1].img}/>
      <img src={imgdata[2].img}/>
      <img src={imgdata[3].img}/>
    </div>
  </div>)


}

export default App;
