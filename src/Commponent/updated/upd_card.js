import React from 'react';
const Upd_card = (props) => {
  return (
    <>
        <div className="box">
              <div className="new_box_img">
                 <img src={`assets/wee/bd_a/${props.img}`} alt="new" />
              </div> 
              <h4>{props.text}</h4>
        </div>
    </>
  )
}

export default Upd_card