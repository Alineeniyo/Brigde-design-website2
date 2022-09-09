import React from 'react';
import './wee_more_coll.css';
import wd from './wm_data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import {Pagination,Scrollbar} from 'swiper';
import { Swiper , SwiperSlide} from 'swiper/react';

const Wee_more_coll = () => {
  return (
    <section>
       <div className="container more_wee_container">
         <Swiper
      // install Swiper modules
            modules={[ Pagination,Scrollbar]}
            spaceBetween={20}
            slidesPerView={4}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {wd.map(({id,img1})=>{
              return(
                
              <SwiperSlide key={id} >
                  <img src={`assets/Decoration/${img1}`} alt="wee_image" className='wee-call-ims'/>
              </SwiperSlide>
              )
            })} 
      </Swiper>
       </div>
     
    </section>
  )
}

export default Wee_more_coll;