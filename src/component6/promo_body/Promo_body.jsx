import React from 'react';
import './promo_body.css';
import promob from './promo_data';
import Promocard from './promo_card';
const Promo_body = () => {
  return (
    <section>
        <div className="container prom_body_container">
            <h2 className='cmain'>Choose Amazing PROMOTION MATERIALS in Bridge Design</h2>
            <small>Design is a part of our life</small>
            <ul className='prom_b_links'>
                <li><a href="#prom">Pull up</a></li>
                <li><a href="#prom">Sticker</a></li>
                <li><a href="#prom">One way</a></li>
                <li><a href="#prom">Wallpaper</a></li>
                <li><a href="#prom">Banner</a></li>
            </ul>
            <div className="prom_body_img">
                {
                   promob.map((palue)=>{
                    return <Promocard
                     key={palue.id}
                     {...palue}
                     />
                   })
                }
            </div>
        </div>
    </section>
  )
}

export default Promo_body