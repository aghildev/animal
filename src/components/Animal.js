import React, { useState } from 'react'
import "./Animal.css"
import bird from "../svg/bird.svg"
import cat from "../svg/cat.svg"
import cow from "../svg/cow.svg"
import dog from "../svg/dog.svg"
import gator from "../svg/gator.svg"
import heart from "../svg/heart.svg"
import horse from "../svg/horse.svg"


const svgMap={
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
}

function Animal({type}) {
   const[clicks,setClicks]= useState(0)
   const handleClick = ()=>{
        setClicks(clicks+1)
   }
  return (
    <div className = "image-container" onClick={handleClick}>
       <img className ="animal-img"src={svgMap[type]} alt="image" />
       <img className = "heart-img"src={svgMap["heart"]} alt="heart" style={{width:10+10*clicks+"px"}} />
    </div>
  )
}

export default Animal