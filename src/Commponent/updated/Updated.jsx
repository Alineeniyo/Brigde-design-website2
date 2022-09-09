import React from 'react';
import './updated.css';
import Updcard from './upd_card';
import updata from './upd_data';
import { Link } from 'react-router-dom';
const Updated = () => {
  return (
    <section>
      <div className="container news_bg-one">
        <p className='new-d'>what new to day ?</p>
        <div className="boxes_container">
              {updata.map((ulue)=>{
                return(
                  <Updcard
                    key={ulue.id}
                    {...ulue}
                  />
                )
              })}  
          </div>
        <Link to='/contact'><button className='btn btn-primary umb'>Order yours now</button></Link>  
        </div>
     </section>
  )
}

export default Updated;