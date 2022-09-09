import React from 'react'

const Bp_card = (props) => {
  return (
    <>
       <img src={`assets/img/${props.img1}`} alt="bp_image" />
       <img src={`assets/img/${props.img2}`} alt="bp_image" />
       <img src={`assets/img/${props.img3}`} alt="bp_image" />
       <img src={`assets/img/${props.img4}`} alt="bp_image" />
    </>
  )
}

export default Bp_card;