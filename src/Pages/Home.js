import React, { Fragment } from 'react'
import Hero from '../Components/Herosection/Hero'
import Company from '../Components/Company/Company'
import Compteur from '../Components/compteur/Compteur'
import Courses from '../Components/cours-section/Courses'
import Chouse from '../Components/Chouse/Chouse'
import Listcours from '../redux/Pagecorses/Listcours'
import Inscription from './Inscription'
import Slider from '../Components/slider/slider'



 
function Home() {
  return (
   
        <Fragment>
            
            <Hero/ >
            <Company/ >
            <Compteur/ >
            <Courses/ >
            <Chouse/ >
            <Listcours/>
            <Inscription/>
            <Slider/>
            
        </Fragment>
        

  )
}

export default Home


