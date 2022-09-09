import React from 'react';
import './colleges.css';
import Collecard from './colle_card';
import colled from './colleges_data';
const Colleges = () => {
  return (
    <section>
      <div className="pop_container">
        <div className="pop_header">
          <h3 className='bold'>Popular Brand Works With Us</h3>
        </div>
        <div className="pop_brand">
            {
              colled.map((calue) => {
               return <Collecard 
                   key={calue.id}
                   {...calue}
                />
              })
            }
        </div>
      </div>
    </section>
  )
}

export default Colleges;