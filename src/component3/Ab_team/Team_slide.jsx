import React from 'react';
import './ab_team.css';
import {BsWhatsapp} from 'react-icons/bs';
import {FaFacebookF , FaInstagram} from 'react-icons/fa';
import {Pagination,Scrollbar} from 'swiper';
import { Swiper , SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import tedata from './ab_data';
const TeamSlider = (props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination,Scrollbar]}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        1280:{
          spaceBetween:40,
          slidesPerView:3,
        },
        1024:{
          spaceBetween:40,
          slidesPerView:2
        },
        600: {
          spaceBetween:40,
          slidesPerView:1
        }
      }}
    >
      {tedata.map(({id,img,post,name,fb,ins,tw})=>{
        return(
          
          <SwiperSlide key={id} className='person_box_1'>
            <div className="img_tp">
              <img src={`assets/wee/bd_a/${img}`} alt="pt_main" />
           </div>
          <div className="desc_tp">
            <small>{post}</small>
            <h4>{name}</h4>
          </div>
          <div className="social_tp">
              <a href={fb} target="_blank" rel='noreferrer'><BsWhatsapp/></a>
              <a href={ins} target="_blank" rel='noreferrer'><FaInstagram/></a>
              <a href={tw} target="_blank"rel='noreferrer' ><FaFacebookF/></a>
          </div>
        </SwiperSlide>
        )
      })} 
    </Swiper>
  );
};

export default TeamSlider;;