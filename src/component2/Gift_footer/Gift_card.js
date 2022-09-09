import React from 'react';
import {BiHeart} from 'react-icons/bi';
const Gift_card = (props) => {
  return (
    <>
        <div className="gift_fi1">
            <img src={`assets/wee/${props.img}`} alt="footer_img" />
            <div className='cont_g'>
              <div>{props.name}</div>
              <div className='heart'><BiHeart/></div>
            </div>
        </div>
    </>
  )
}

export default Gift_card;