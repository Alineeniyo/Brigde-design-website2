import React from 'react';
import './testimanials.css';
import Slider2 from './Slide2';
import Slider from './Slide';
const Testimanials = () => {
  return (
    <section>
      <div className="container testim_container">
        <div className="vide_test">
           <video width='100%'controls> 
              <source src='VIDEO.MP4' type='video/mp4'/>
            </video>
        </div>
            <div className="ts_slider1">
               <Slider2/>
            </div>
            
      </div>
{/* ============================================== REAL TESTIMONIAL ====================================== */}

      <div className="container real_testim"> 
         <h3 className='cmain cbtn'>Testimonials</h3>
            <p>Here are happy clients we work with Lorem ipsum dolor sit.</p>
            <Slider/>
      </div>
    </section>
  )
}

export default Testimanials;