import React from 'react'

const Mach_card = (props) => {
  return (
    <>
        <div className="machine_vis_desc">
            <h3>{props.text}</h3>
             <div className="machine_vis">
                <img src={`assets/wee/bd_a/${props.img1}`} alt="machine_img" />
                <img src={`assets/wee/bd_a/${props.img2}`} alt="machine_img" />
                <img src={`assets/wee/bd_a/${props.img3}`} alt="machine_img" />
            </div>
        </div>
    </>
  )
}

export default Mach_card