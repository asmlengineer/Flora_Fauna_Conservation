import Conservation from "./Components/Conservation/Conservation";
import Extinct from "./Components/Extinct/Extinct";
import Fauna from "./Components/Fauna/Fauna";
import Flora from "./Components/Flora/Flora";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Header from "./Components/Header/Header";
import { useState } from "react";
function App(){   

  const [active, setactive] = useState('home');

   return(
    <>
          <Header setactive={setactive}/> 
   
         {active === 'home' && <Home/>}      
         {active === 'Flora' && <Flora/>}
         {active === 'Fauna' && <Fauna/>}
         {active === 'Conservation' && <Conservation />}
         {active === 'Extinct' && <Extinct/>}
         {active === 'About' && <About/>}
         {active === 'Contact' && <Contact/>}

        <Footer setactive={setactive}/> 
   
   </>
 );
}
export default App;