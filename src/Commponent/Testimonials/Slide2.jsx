import React from 'react';
import './testimanials.css';
import {Pagination,Scrollbar} from 'swiper';
import { Swiper , SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import vmdata from './vm.js';
const Slider2 = (props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination,Scrollbar]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {vmdata.map(({id,title,main})=>{
        return(
          
          <SwiperSlide key={id} className='tvm'>
            <h3 className='cmain'>{title}</h3>
            <p>{main}</p>
        </SwiperSlide>
        )
      })} 
    </Swiper>
  );
};

export default Slider2;