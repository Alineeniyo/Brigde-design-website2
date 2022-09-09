import React from 'react';
import './ab_office.css';
import { useState } from 'react';
import odata from './ab_off_data';
const Ab_office = () => {
  const [SlideData , setSlideData] = useState(odata[0])

  const handleClick = (index) =>{
     const slider = odata[index];
     setSlideData(slider);
  }
  return (
    <section>
        <h2 className='cmain office-head'>Our office</h2>
        <div className=" container office-container">
          <div className="office_img_slider">
                <img src={`assets/img/${SlideData.img}`} alt="office-main" className='main_ab1'/>
                 <div className="main_ab2">
                  {
                      odata.map((data,i)=>{
                      return(
                      <img key={data.id} src={`assets/img/${data.img}`} onClick={()=>handleClick(i)} alt="office-main1" className={SlideData.id===i?"clicked":""}/>
                      )   
                    })
                  }
              </div>
          </div>
          <div className="office_desc">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique commodi laborum deleniti nobis nisi error tenetur. Temporibus amet cumque autem!</p>

          </div>
        </div>
    </section>
  )
}

export default Ab_office