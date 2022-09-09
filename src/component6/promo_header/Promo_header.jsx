import React from 'react'
import './promo_header.css'
const Promo_header = () => {
  return (
    <section>
        <div className="container prom_header_container">
                <div className="promo_header_img">
                  <img src="assets/promot/ppp.jpg" alt="promo-header" />
                </div>
                <div className="promo_header_img2">
                   <img src="assets/promot/kev.png" alt="promo-header" />
                </div>
            </div>
    </section>
  )
}

export default Promo_header