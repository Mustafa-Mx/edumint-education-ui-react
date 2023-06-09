import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Routes } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import Course from './components/course';
import CourseDetails from './components/course-details';
import About from './components/about';
import Event from './components/event';
import EventDetails from './components/event-details';
import Instructor from './components/instructor';
import InstructorDetails from './components/instructor-details';
import Pricing from './components/pricing';
import Gallery from './components/gallery';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';




class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Routes>
                        <Route exact path="/" element={<HomeV1/>} />
                        {/* <Route path="/home-v2" element={<HomeV2/>} />
                        <Route path="/home-v3" element={<HomeV3/>} /> */}
                        <Route path="/course" element={<Course/>} />
                        <Route path="/course-details" element={<CourseDetails/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/event" element={<Event/>} />
                        <Route path="/event-details" element={<EventDetails/>} />
                        <Route path="/instructor" element={<Instructor/>} />
                        <Route path="/instructor-details" element={<InstructorDetails/>} />
                        <Route path="/pricing" element={<Pricing/>} />
                        <Route path="/gallery" element={<Gallery/>} />
                        <Route path="/sign-in" element={<SignIn/>} />
                        <Route path="/sign-up" element={<SignUp/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/blog" element={<Blog/>} />
                        <Route path="/blog-details" element={<BlogDetails/>} />
	                </Routes>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('edumint'));
