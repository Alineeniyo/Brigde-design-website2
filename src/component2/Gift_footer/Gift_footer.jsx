import React from 'react';
import './gift_footer.css';
import gidata from './gift_data';
import Gift from './Gift_card';
const Gift_footer = () => {
  return (
    <section>
        <div className="container gift_footer_container">
            <div className="gift_fh">
                <h2 className='cmain'>This is Our Post</h2>
                <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit reprehenderit similique!</strong>
            </div>
            <div className="gift_fi">
                  {
                        gidata.map((gflue)=>{  
                          return <Gift 
                            key={gflue.id}
                            {...gflue}
                          />
                        })
                  }
                
            </div>
            <div className="gift_cta">
                <button className='btn btn-primary'>Order yours</button>
            </div>
        </div>
        
    </section>
  )
}

export default Gift_footer