import React from 'react';
import './testimanials.css';
import { Pagination,Scrollbar} from 'swiper';
import { Swiper , SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import tdata from './test_data1';
const Slider = (props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[ Pagination,Scrollbar]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {tdata.map(({id,username,para,img})=>{
        return(
          
          <SwiperSlide key={id}className="test-visual">
            <div className="client_avatar">
              <img src={`assets/img/${img}`} alt="client" /> 
            </div>
            <h3 className='client_name'>{username}</h3>
            <p className='client-review'>{para}</p>
        </SwiperSlide>
        )
      })} 
    </Swiper>
  );
};

export default Slider;