import React from 'react'
import dtop from './topdata';
import dtop1 from './proml';
import dtop2 from './promor';
import './promo_top.css';
const Promo_top = () => {
  return (
    <>
        <section>
            <div className="container container-prom-top">
                <div className="promol">
                    {
                    dtop1.map((talue)=>{
                        return(
                            <img src={`assets/promot/${talue.img}`} alt="promo-top-img" />
                        )
                    })
                  }
                </div>
                <div className="promM">
                 {
                    dtop.map((talue)=>{
                        return(
                            <img src={`assets/promot/${talue.img}`} alt="promo-top-img" />
                        )
                    })
                  }
                </div>
                <div className="promr">
                   {
                    dtop2.map((talue)=>{
                        return(
                            <img src={`assets/promot/${talue.img}`} alt="promo-top-img" />
                        )
                    })
                  }
                </div>
            </div>
        </section>
    </>
  )
}

export default Promo_top