import React from 'react';
import './ab_team.css';
import TeamSlider from './Team_slide';
const Ab_team = () => {
  return (
    <section>
        <div className="container container_team">
            <h2 className='cmain'>Meet Our Team Member</h2>
             <TeamSlider/>  
        </div>
        
    </section>
  )
}

export default Ab_team;