import React, { Fragment } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProjectSingle from '../../components/ProjectSingle'
import Testimonial from '../../components/testimonial'
import Footer from '../../components/footer'
import bg from "../../components/assets/careersedited.jpg";

const ProjectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { projectName, projectImage } = location.state || { projectName: 'Default Name', projectImage: 'Default Image URL' };

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={projectName} pagesub={'Project Details'} pageImg={bg} />
      <ProjectSingle projectImage={projectImage} />
      <Testimonial />
      <Footer />
    </Fragment>
  )
};

export default ProjectPage;



// import React, {Fragment} from 'react'
// import { useHistory } from 'react-router-dom';
// import Header from '../../components/header'
// import PageTitle from '../../components/pagetitle'
// import ProjectSingle from '../../components/ProjectSingle'
// import Testimonial from '../../components/testimonial'
// import Footer from '../../components/footer'
// import bg from "../../components/assets/careersedited.jpg";



// const ProjectPage =() => {
//     const history = useHistory();
//     const { projectName, projectImage } = history.location.state || { projectName: 'Default Name', projectImage: 'Default Image URL' };
//     return(
//         <Fragment>
//             <Header/>
//             <PageTitle pageTitle={projectName} pagesub={'Project Details'} pageImg={bg}/>
//             <ProjectSingle projectImage={projectImage} />
//             <Testimonial/>
//             <Footer/>
//         </Fragment>
//     )
// };
// export default ProjectPage;

