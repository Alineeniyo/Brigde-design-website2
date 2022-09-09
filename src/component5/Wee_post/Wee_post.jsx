import React from 'react'
import './wee_post.css'
import Weecard1 from './wee_card1';
import Weecard2 from './wee_card2';
import Weecard3 from './wee_card3';
import wee1 from './wee_data1';
import wee2 from './wee_data2';
import wee3 from './wee_data3';
const Wee_post = () => {
  return (
    <section>
        <div className="container wee_post_container">
            <h2 className='cmain'>POST OF DECORATION</h2>
            <div className="wee_pimg">
                <div className="wee_ping_left">
                    {
                        wee1.map((welue1)=>{
                            return <Weecard1
                            key={welue1.id}
                            {...welue1}
                            />
                        })
                    }
                </div>
                <div className="wee_ping_middle">
                     {
                        wee2.map((welue2)=>{
                            return <Weecard2
                            key={welue2.id}
                            {...welue2}
                            />
                        })
                    }
                </div>
                <div className="wee_ping_right">
                        {
                        wee3.map((welue3)=>{
                            return <Weecard3
                            key={welue3.id}
                            {...welue3}
                            />
                        })
                    }
                </div> 
            </div>
            <div className="cta_wee_pos">
                <button className='btn btn-primary'>View more</button>
            </div>
        </div>
    </section>
  )
}

export default Wee_post