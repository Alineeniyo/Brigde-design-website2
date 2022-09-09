import React from 'react';
import './pb_boxes2.css';
import Pbcard from './pb_card';
import pb_data from './pb_data2';
const Pb_boxes2 = () => {
  return (
    <section>
        <div className="container pb_boxes2_container">
          {
            pb_data.map((pbvalue)=>{
              return <Pbcard
                  key={pbvalue.id}
                  {...pbvalue}
              />
            })
          }
        </div>
    </section>
  )
}

export default Pb_boxes2