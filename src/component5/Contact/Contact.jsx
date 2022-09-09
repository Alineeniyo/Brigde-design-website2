import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
const Contact = () => {
  return (
   <section>
         <h1 className='cmain cont-txt'>Contact Us</h1>
    <div className="container contact_container">
      <div className="cont_boxes">
           <article className='con-side'>
              <MdOutlineEmail  className='icon-con'/>
              <h4>Email</h4>
              <h5>bridgedesignltd@gmail.com</h5>
              <a href="mailto:bridgedesignltd@gmail.com">Send a message</a>
           </article>
           <article className='con-side'>
              <RiMessengerLine  className='icon-con'/>
              <h4>Messenger</h4>
              <h5>bridgedesignltd@gmail.com</h5>
              <a href="#main">Send a message</a>
           </article>
           <article className='con-side'>
              <BsWhatsapp  className='icon-con'/>
              <h4>WhatsApp</h4>
              <h5>bridgedesignltd@gmail.com</h5>
              <a href="https://api.whatsapp.com/send?phone=250788774264">Send a message</a>
           </article>
      </div>
{/* ================================= End options ==================================== */}
      <form action="" className='form'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='Email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary conb'>Send Message</button>
      </form> 
    </div>   
   </section>
  )
}

export default Contact