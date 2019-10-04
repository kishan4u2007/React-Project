import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom';
import Service from '../components/Service'
import FeaturedRooms from '../components/FeaturedRooms'
import Button from '../components/StyledHero'


export default function Home() {
    return (
        <div>
           <Hero>
               <Banner title="Luxrious Rooms" subtitle="deluxe rooms starting at $299">
                   <Link to="/rooms" className="btn-primary">Our rooms</Link>
               </Banner>
           </Hero>
            <Service />
            <FeaturedRooms />
          
     
        </div>
    )
}



