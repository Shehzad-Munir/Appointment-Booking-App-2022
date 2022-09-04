import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

import "./hotel.css"
import { useState } from 'react';
const Hotel = () => {
  const [slideNumber,setSlideNumber] =useState(0)
  const [open,setOpen] = useState(false)


  const photos =[
    {
      src:"https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="
    },
    
  ];
  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true)
  }
  const handleMove =(direction)=>{
    let newSlideNumber;
    if(direction==="l")
    {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
    }
    else{
      newSlideNumber = slideNumber === 5 ? 1 : slideNumber+1;
    }
    setSlideNumber(newSlideNumber)

  }
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {open &&
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>
        }
        <div className="hotelWrapper">

          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">
            Grand Hotel
          </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500 meter from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this  property and get free  airport taxi
          </span>
          <div className="hotelImage">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} onClick={()=>handleOpen(i)} alt="" className="hotelImg"/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of karakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi soluta debitis officia iste enim recusandae vel corporis nemo accusantium eaque quam omnis expedita laudantium dignissimos voluptate, et ipsa itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis suscipit nam eum assumenda nulla saepe soluta. Doloribus similique omnis illum, veniam odit, ipsum ipsa maiores perferendis recusandae corporis velit!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for  a 9-night stay!</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, optio? Id, soluta quaerat minima quod consequatur sed excepturi iste vero nam itaque doloremque. Adipisci fuga, fugit cum suscipit facilis exercitationem.</span>
              <h2>
                <b>$945</b> (9-nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>

          </div>
        </div>
      </div>
      <MailList />
      <Footer/>
    </div>
  )
}

export default Hotel