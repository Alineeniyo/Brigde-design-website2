import React from 'react';
import './gift_header.css';
const Gift_header = () => {
  return (
   <section>
        <div className="container gift_container">
          <div className="gift_desc_cta">
                <h3>Gift is Something valuntarily transferred by Person to another without Compensation</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui, iste velit nihil fugit deleniti fugiat ullam iusto quasi. Voluptatibus?</p>
                <div className="gift_call_action">
                    <button className='btn btn-primary btn-gif'>Make Appointment</button>
                </div>
            </div>
            <div className="gift_visual">
                <img src='assets/wee/bd_a/rr.jpg' alt="gift_header" />
            </div>
        </div>
   </section>
  )
}

export default Gift_header