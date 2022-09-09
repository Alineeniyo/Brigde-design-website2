import React from 'react';
import './pb_header8.css';
import {ImLocation2} from 'react-icons/im';
import {BsWatch} from 'react-icons/bs';
const pb_header8 = () => {
  return (
    <section>
      <div className="pb_container container">
        <div className="pb_desc_head">
          <h2>SIGNS &amp; BANNERS</h2>
          <div className="pb_cta">
            <button className='btn btn-primary'>Shop now</button>
            <button className='btn btn-secondary'>Contact us</button>
          </div>
          <div className="pb_main-cta">
               <small className='aw-icon'>
                 <i><ImLocation2/></i>
                 <small>
                    <h5 className='cmain'>Address</h5>
                    <p>Rwanda,Kigali city,Ndaru arcde</p>
                 </small>
               </small>
               {/*=============================== second small start here =============================*/}
               <small className='aw-icon'>
                 <i><BsWatch/></i>
                 <small>
                   <h5 className='cmain'>Working hour</h5>
                   <p>Mon-sat8:00 am-10:00 pm</p>
                 </small>
                 
               </small>
          </div>
        </div>
        <div className="img_ic">
            <div className="img_ic_1">
               <img src="assets/sign/drop.png" alt="" />
            </div>
            <div className="img_ic_2">
              <img src="assets/sign/drop11.webp" alt="" />
            </div>
        </div>
      </div> 
    </section>
  )
}

export default pb_header8;