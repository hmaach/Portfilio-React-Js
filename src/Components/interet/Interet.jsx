import React, { useRef, useState } from 'react'
import './interet.css'
import { SiPhotocrowd } from 'react-icons/si'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import 'swiper/css';

const Interet = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };


  return (
    <section id="interet">
      <h5>hi</h5>
      <h2>Interet</h2>

      <Swiper
        className="container mySwiper container_interet"
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide className="interet">
          <div className="avatar_div">
            <SiPhotocrowd className='avatar' />
          </div>
          <h5 className="interet_nom">ASSSSSS</h5>
          <small className="interet_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            libero quidem magnam, ad ipsam cupiditate rerum, sunt inventore quae
            repellat nostrum hic incidunt placeat aperiam. Adipisci, sint sit vero eos eligendi,
            repellendus sapiente ratione alias cumque nulla praesentium fugit dolores!
          </small>
        </SwiperSlide>
        <SwiperSlide className="interet">
          <div className="avatar_div">
            <SiPhotocrowd className='avatar' />
          </div>
          <h5 className="interet_nom">ASSSSSS</h5>
          <small className="interet_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            libero quidem magnam, ad ipsam cupiditate rerum, sunt inventore quae
            repellat nostrum hic incidunt placeat aperiam. Adipisci, sint sit vero eos eligendi,
            repellendus sapiente ratione alias cumque nulla praesentium fugit dolores!
          </small>
        </SwiperSlide>
        <SwiperSlide className="interet">
          <div className="avatar_div">
            <SiPhotocrowd className='avatar' />
          </div>
          <h5 className="interet_nom">ASSSSSS</h5>
          <small className="interet_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            libero quidem magnam, ad ipsam cupiditate rerum, sunt inventore quae
            repellat nostrum hic incidunt placeat aperiam. Adipisci, sint sit vero eos eligendi,
            repellendus sapiente ratione alias cumque nulla praesentium fugit dolores!
          </small>
        </SwiperSlide>
        <SwiperSlide className="interet">
          <div className="avatar_div">
            <SiPhotocrowd className='avatar' />
          </div>
          <h5 className="interet_nom">ASSSSSS</h5>
          <small className="interet_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            libero quidem magnam, ad ipsam cupiditate rerum, sunt inventore quae
            repellat nostrum hic incidunt placeat aperiam. Adipisci, sint sit vero eos eligendi,
            repellendus sapiente ratione alias cumque nulla praesentium fugit dolores!
          </small>
        </SwiperSlide>
        <SwiperSlide className="interet">
          <div className="avatar_div">
            <SiPhotocrowd className='avatar' />
          </div>
          <h5 className="interet_nom">ASSSSSS</h5>
          <small className="interet_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            libero quidem magnam, ad ipsam cupiditate rerum, sunt inventore quae
            repellat nostrum hic incidunt placeat aperiam. Adipisci, sint sit vero eos eligendi,
            repellendus sapiente ratione alias cumque nulla praesentium fugit dolores!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}


export default Interet