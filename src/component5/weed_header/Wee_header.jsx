import React from 'react'
import './wee_header.css';
const Wee_header = () => {
  return (
     <section>
        <div className="container wee_container">
            <div className="wee_desc_head">
                <h2 className='cmain'>Bridge Decoration</h2>
                <div className="wee_desc34">
                   <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                     dolor sit amet consectetur adipisicing elit. Distinctio voluptates
                   </h3>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia porro molestias cum dignissimos 
                    cumque asperiores totam inventore itaque rem quam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat provident voluptas dignissimos ullam pariatur! Ex eveniet aliquid delectus quia cupiditate
                    </p>
                </div>
                <div className="cta_wee">
                   <button className='btn btn-primary'>Make appointment</button>   
                </div>    
            </div>
            <div className="wee_img">
               <img src='assets/Decoration/dec3.jpg' alt="wee_img" /> 
            </div>
        </div>
     </section>
  )
}

export default Wee_header