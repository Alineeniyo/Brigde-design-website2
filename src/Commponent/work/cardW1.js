import React from 'react'
import { Link } from 'react-router-dom';
const Cardw1 = (props) => {
  return (
   <>
       <div className="do_main_boxe">
            <img src={`assets/wee/bd_a/${props.img}`} alt="we_do" />
            <Link to={props.des}><a href="#go" className='btn btn-do'>{props.btn}</a></Link>
        </div>   
   </>
  )
}

export default Cardw1;