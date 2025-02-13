import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonals from './Components/Testimonals/Testimonals'

import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div>
      
      
      
      <Navbar />
    <Hero/>
 <div className="container">
  <Title subTitle='Our Program' Title='What we offer'/>
   <Programs/>
 <About/>
 <Title subTitle='Gallery' Title='Campus photos'/>
 <Campus/>
 <Title subTitle='Testimonals' Title='What students say '/>

<Testimonals/>
<Title subTitle='Contact us' Title='Get in touch'/>
<Contact/>
   <Footer/>
    
    </div>

    </div>
)
}

export default App







