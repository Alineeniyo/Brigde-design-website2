import React from 'react';
import './bp_body.css';
import bp_data from './bp_data';
import bp_data2 from './bp_data2';
import bp_data3 from './bp_data3';
import Bpcard from './Bp_card';
import Bpcard2 from './Bp_card2';
import Bpcard3 from './Bp_card3';
const Bp_body = () => {
  return (
    <section>
      <div className="container bp_body_container">
        <div className="bp_body_left">
             
             {
              bp_data.map((bp1)=>{
                return <Bpcard
                     key={bp1.value}
                     {...bp1}
                />
              })
             }
        </div>
        <div className="bp_body_middle">
           {
            bp_data2.map((bp2)=>{
              return <Bpcard2
                  key={bp2.id}
                  {...bp2}
              />
            })
           }
        </div>
        <div className="bp_body_right">
           {
            bp_data3.map((bp3)=>{
              return<Bpcard3
                  key={bp3.id}
                  {...bp3}
              />
            })
           }
        </div>
      </div>
    </section>
  )
}

export default Bp_body