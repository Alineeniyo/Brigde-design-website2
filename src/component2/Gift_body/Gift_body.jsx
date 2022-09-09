import React from 'react';
import './gift_body.css';
const Gift_body = () => {
  return (
      <section>
          <div className="container gift_body_container">
            <div className="gift_body_imgc">
                <img src='assets/wee/bd_a/birt.jpg' alt="body_image" />
            </div>
            <div className="gift_body_desc">
                <h2 className='cmain'>What Gift we Offer</h2>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <br/> Lorem ipsum dolor sit amet.</h4>
                <div className="radios">

                      <label htmlFor="mradio" className='radioG'>
                        <input type="radio" name='rafield' id='mradio' class='rd_input'/>
                        <div className="radio_c"></div>
                        Birthday Gifts
                      </label>

                      <label htmlFor="mradio2" className='radioG'>
                        <input type="radio" name='rafield' id='mradio2' class='rd_input'/>
                        <div className="radio_c"></div>
                        Bride Shower Gifts
                      </label>

                      <label htmlFor="mradio3" className='radioG'>
                        <input type="radio" name='rafield' id='mradio3' class='rd_input'/>
                        <div className="radio_c"></div>
                        Making Invitation
                      </label>

                      <label htmlFor="mradio4" className='radioG'>
                        <input type="radio" name='rafield' id='mradio4' class='rd_input'/>
                        <div className="radio_c"></div>
                        Designed Agenda
                      </label>

                      <label htmlFor="mradio5" className='radioG'>
                        <input type="radio" name='rafield' id='mradio5' class='rd_input'/>
                        <div className="radio_c"></div>
                        Birthday Gifts
                      </label>

                       <label htmlFor="mradio6" className='radioG'>
                          <input type="radio" name='rafield' id='mradio6' class='rd_input'/>
                          <div className="radio_c"></div>
                            Designed Pens
                      </label>
                </div>
                
            </div>
          </div>
      </section>
  )
}

export default Gift_body