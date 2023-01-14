import React, { useRef, useState } from 'react'
import './interet.css'
import { SiPhotocrowd } from 'react-icons/si'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import 'swiper/css';
import data from '../../data/data.json'


const Interet = () => {

  const interet = data.interet
  // console.log(interet)

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };


  return (
    <section id="interet">
      <h5>Explorant mes centres d'intérêt pour découvrir mes passions</h5>
      <h2>Centre d'Intérêt</h2>

      <Swiper
        className="container mySwiper container_interet"
        pagination={pagination}
        modules={[Pagination]}
      >
        
         
        
        {interet.map((item, index) =>
        <SwiperSlide className="interet" key={index}>
      <div class="container3">
  <div class="card1">
    <div class="card1-header">
      <img src={item.image} alt="rover" />
    </div>
    <div class="card1-body">
      <div className="titre1">

      <h4 className="interet_nom">
      {item.titre}
      </h4>
      </div>
      <div className="body">

      <p className="interet_detail">
      {item.body}{item.ref && <a href='https://www.instagram.com/pie_stagiaires/'>@pie_stagiaires </a>}
      </p>
      </div>
      
    </div>
  </div>
  </div>
          </SwiperSlide>
        )
        }
      </Swiper>

  
      
    </section>
  )
}


export default Interet