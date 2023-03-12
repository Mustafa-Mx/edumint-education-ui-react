import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Intro from './section-components/intro';
import About from './section-components/about';
import CourseFilter from './section-components/course-filter';
import FunFact from './section-components/fun-fact';
import HowToWork from './section-components/how-to-work';
import Testimonial from './section-components/testimonial';
import Team from './section-components/team';
import LatestPost from './blog-components/latest-news';
import Contact from './section-components/contact';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';
import NavbarV3 from './global-components/navbar-v3';
import NavbarV4 from './global-components/navbar-v4';
import BannerV2 from './section-components/banner-v2';
import IntroV3 from './section-components/intro-v3';
import IntroV2 from './section-components/intro-v2';

const Home_V1 = () => {
    return <div>
        <NavbarV4 />
        <BannerV2 />
        <IntroV2/>
        <About />
        <CourseFilter />
        <FunFact />
        <HowToWork />
        <Testimonial />
        <Team />
        <LatestPost />
        <Contact />
        <Footer />
    </div>
}

export default Home_V1

