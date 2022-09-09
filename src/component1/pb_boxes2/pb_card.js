import React from 'react'

const Pb_card2 = (props) => {
  return (
    <>
        <h2>{props.text}</h2>
            <div className="img_boxes2" id={props.imp}>
                <img src={`assets/sign/${props.img1}`} alt="boxes2_img" />
                <img src={`assets/sign/${props.img2}`} alt="boxes2_img" />
                <img src={`assets/sign/${props.img3}`} alt="boxes2_img" />
                <img src={`assets/sign/${props.img4}`} alt="boxes2_img" />
                <img src={`assets/sign/${props.img5}`} alt="boxes2_img" />
                <img src={`assets/sign/${props.img6}`} alt="boxes2_img" />
                <button className='btn btn-primary pb2-btn'>Order Yours</button>
            </div>
    </>
  )
}

export default Pb_card2