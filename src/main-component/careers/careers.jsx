import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import bg from "../../components/assets/careersedited.jpg";
import Footer from '../../components/footer/index.js'
import CareerPage from '../../components/careers/careerPage.jsx'

const Careers = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={'Career'} pagesub={'career'} pageImg={bg} />
      <CareerPage />
      <Footer />
    </Fragment>
  )
}

export default Careers
