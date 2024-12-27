import React, {Fragment,useState} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import EcoNexts from "../../components/Projects/eco-nest"
import Footer from '../../components/footer'
import bg from "../../components/assets/eco_nest_img.jpg";
import ContactUs from "../../components/Projects/contactform";
import Layoutguide from '../../components/layoutGuide/layoutguide'

function Econext() {
  return (
    <Fragment>
    <Header/>
    <PageTitle PageTitle={'Eco-nest'} pagesub={'Project Details'} pageImg={bg}/>
    <EcoNexts />
    <ContactUs />
    <Layoutguide/>
    <Footer/>
    </Fragment>
  )
}


export default Econext