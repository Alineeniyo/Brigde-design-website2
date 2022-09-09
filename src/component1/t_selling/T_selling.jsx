import React from 'react';
import './t_selling.css';
import ts_data from './ts_data';
import Ts from './Ts';
import ts2_data from './Ts2_data';
import Ts2 from './Ts2';
const T_selling = () => {
  return (
    <section>
        <div className="container t_selling_ccontainer">
            <div className="t_sell_img">
                <div className="tsimage_1">
                      {
                         ts_data.map((tsalue)=>{

                          return <Ts 
                                key={tsalue.id}
                                {...tsalue}
                           />
                         })
                      }
                </div>
                <div className="tseimage_2">
                      {
                         ts2_data.map((tsalue1)=>{

                          return <Ts2 
                                key={tsalue1.id}
                                {...tsalue1}
                           />
                         })
                      }
                </div>
                
            </div>
            <div className="top_sell_desc">
                <h2>Top Selling Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quo eius tempora, dolor accusamus accusantium assumenda 
                     velit unde repudiandae repellendus autem. Saepe iure voluptas 
                    odit impedit obcaecati modi inventore, voluptates dolore.</p>

                    <button className='btn btn-primary tsb'>Buy now</button>
            </div>
        </div>
    </section>
  )
}

export default T_selling