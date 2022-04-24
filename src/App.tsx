import { GlobalStyles } from 'styles/GlobalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Loading from "pages/Loading/Loading";
import Home from "pages/Home/Home";
import Gallery from 'pages/Gallery'
import Slideshow from 'pages/Slideshow'
import AboutMe from "pages/AboutMe/AboutMe";
import MyProjekt from "pages/MyProjekt/MyProjekt";
import Jornalist from "pages/Jornalist/Jornalist";




import MainHeader from 'components/Nav/MainHeader1'
import Contact from 'components/Kontakt/Kontakt'

import Header from 'components/organisms/Header/'
import LightBox from 'components/organisms/Lightbox'

function App(): JSX.Element {
  return (
    <Router>
      <MainHeader />
      <LightBox />
        <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>            <Loading />         </Route>
          <Route path="/schufimafi" >       <Home />            </Route>
          <Route path="/überuns" >          <AboutMe />         </Route>
          <Route path="/events" >           <MyProjekt />       </Route>
          <Route path="/jornalist" >        <Jornalist />       </Route>
          <Route path="/gallery">           <Gallery />         </Route>
          <Route path="/slideshow">         <Slideshow />       </Route>
          <Route path="/kontakt">           <Contact />         </Route>
          <Route path="*" >                 <Home />            </Route>


        </Switch>
      </AnimatePresence>
    </Router>
  )
}

export default App
