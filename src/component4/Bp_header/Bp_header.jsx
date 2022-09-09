import React from 'react'
import './bp_header.css';
const Bp_header = () => {
  return (
      <section>
         <div className="container container_bp">
           <div className="bp_desc">
              <h2>Printing &amp; Branding</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eius est sapiente incidunt 
                hic voluptas ducimus non minus fugit amet?</p>
              <div className="bp_cta">
                  <button className='btn btn-primary'>View more collection</button>
              </div>
           </div>
           <div className="bp_img">
              <img src='assets/img/m.1.jpg' alt="bp_image" />
              <img src='assets/img/m.1.jpg'alt="bp_image" className='bp_img_no'/>
           </div>
         </div>
      </section>
  )
}

export default Bp_header