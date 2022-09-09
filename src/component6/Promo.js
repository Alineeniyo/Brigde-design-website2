import React from 'react'
import  PromoHeader from './promo_header/Promo_header';
import Promotop from './promo-top/Promo_top';
import Promomidd from './promo_middle/Promo_midd';
import PromoBody from './promo_body/Promo_body';
const Promo = () => {
  return (
    <>
         <PromoHeader/>
         <Promotop/>
         <Promomidd/>
         <PromoBody/>
    </>
  )
}

export default Promo