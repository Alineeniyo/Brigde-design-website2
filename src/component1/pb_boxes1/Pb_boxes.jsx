import React from 'react';
import './pb_boxes.css';
import pb_data from './pb_data';
import Pbcard from './pb_card';
const Pb_boxes = () => {
  return (
    <section>
      <div className="container pb_box_container">
        <h2>Road Signs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorem eum laboriosam inventore consectetur ex accusamus? Veniam at nesciunt magnam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque accusantium perferendis ad.
        </p>
       
        <div className="img_box_pb" id='road'>
            {
              pb_data.map((pbalue) => {   
                return <Pbcard
                      key={pbalue.id}
                      {...pbalue}
                />
              })
            }
        </div>
        <button className='btn btn-primary box1'>Order Yours</button>
      </div>
    </section>
  ) 
}

export default Pb_boxes;