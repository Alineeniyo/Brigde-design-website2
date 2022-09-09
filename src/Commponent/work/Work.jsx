import React from 'react';
import './work.css';
import Cardw1 from './cardW1';
import Cardw2 from './cardW2';
import dataw2 from './data_work2';
import datawork from './data_work';
const Work = (props) => {
  return (
    <section >
     <div className="container work_container">
       <div className="do_descr">
         <h2 className='cmain'>{props.whead}</h2>
           <h4>{props.wtitle}</h4>
       </div>

       <div className="do_boxes">
              <div className="do_main_boxes">
                {/* sideboxes here */}
                {datawork.map((walue)=>{

                  return <Cardw1 
                            key={walue.id}
                            {...walue}
                         />
                })}
                  
            </div>
          <div className="do_new p_rel">
              {dataw2.map((walue2)=>{
                 return (
                    <Cardw2 
                      key={walue2.id}
                      {...walue2}
                    />
                 )
              })}
              
          </div>
       </div>
     </div>
    </section>
  )
}

export default Work;