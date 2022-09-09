import React from 'react';
import './ab_machine.css';
import Mach from './mach_card';
import dmach from './mach_data';
const Ab_machine = () => {
  return (
    <section>
        <div className="container machin_container">
            <h2 className='cmain ab-mach-h'>Super machine in Bridge Design</h2>
              {
                dmach.map((mvalue)=>{
                 return <Mach
                   key={mvalue.id}
                   {...mvalue}
                   />
                })
              }
        </div>
    </section>
  )
}

export default Ab_machine