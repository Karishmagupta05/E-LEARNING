import React from 'react'
import "./App.css"
import Header from "./components/common/heading/HeadItem";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./components/home/Home"
import About from "./components/about/About"
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team'
import Contact from './components/contact/Contact';
// import Blog from "./components/blog/Blog"
import Price from './components/price/Price';

const App = () => {
  return (
   
    <>

  <BrowserRouter>
  <Header/>

    <Routes>
  
      <Route path='/' exact Component={Home}/>
      <Route path='/about' exact Component={About}/>
      <Route path='/courses' exact Component={CourseHome}/>
      <Route path='/team' exact Component={Team}/>

      <Route path='/contact' exact Component={Contact}/>
      <Route path='/price' exact Component={Price}/>
      {/* <Route  path='/journal' exact component={Blog} /> */}
    </Routes>
   </BrowserRouter>
    </>

  )
}

export default App