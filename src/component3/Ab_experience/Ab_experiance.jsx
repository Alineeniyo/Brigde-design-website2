import React from 'react';
import './ab_experience.css';
import { Link } from 'react-router-dom';
const Ab_experiance = () => {
  return (
    <section>
        <div className="container exp_container">
                <video width='100%' controls>
                    <source src='' type='video/mp4'/>
                </video>
            <div className="desc_exp">
                <h2>Get Working Experience</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Cum maiores, mollitia 
                   a placeat, velit perspiciatis quisquam dolore 
                   odit iure autem rerum officiis delectus explicabo 
                   rem molestias facilis. Libero, excepturi at.
                </p>
                <div className="exp_cta">
                    <Link to='/about'><button className='btn btn-primary'>View Our pattern</button></Link>
                    <Link to='/contact'><button className='btn btn-bor1'>Join Us</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ab_experiance