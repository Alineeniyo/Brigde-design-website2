import React from 'react';
import './outer_inner.css';
import iodata1 from './io_data2';
import Iocard1 from './io_card2';
import Iocard2 from './io_card';
import iodata2 from './io_data1'
const Outer_Inner = () => {
  return (
    <section>
     <div className="container oi-container">
        <ul className='oi-order'>
            <li><a href="#hoi">Outdoor &amp; Indoor</a></li>
            <li><a href="#road">Road sign</a></li>
            <li><a href="#conference">Conference Banners</a></li>
            <li><a href="#booth">Photo booth</a></li>
            <li><a href="#celemonies">Celemonies Banner</a></li>
            <li><a href="#tear">Tear Drop</a></li>
            <li><a href="#reflection">Reflecting Banner</a></li>
        </ul>

        <div className="io_middle">
          <div className="oi_img_desc">
                <h2>OUTDOOR &amp; INDOOR</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni officia iusto necessitatibus. 
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum iure error dolores.
                </p>

                {iodata2.map((iolue2)=>{
                return (

                <Iocard2 
                  key={iolue2.id}
                  {...iolue2}
                 />  

                 )
              })}
                
            </div>
            <div className="io_imgs">
              {iodata1.map((iolue1)=>{
                return (

                <Iocard1 
                  key={iolue1.id}
                  {...iolue1}
                 />  

                 )
              })}
            </div>
          </div>
      <button className='btn-bor'>Order yours</button>
     </div>
    </section>
  )
}

export default Outer_Inner;