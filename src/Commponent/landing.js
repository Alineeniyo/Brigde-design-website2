import React from 'react'
import Header from './header/Header';
import Work from './work/Work';
import Testimanials from './Testimonials/Testimanials';
import Updated from './updated/Updated';
import Colleges from './Colleges/Colleges';
const Landing = () => {
  return (
    <>
        <Header/>
         <Work/>
         <Testimanials/>
         <Updated/>
         <Colleges/>
    </>
  )
}

export default Landing