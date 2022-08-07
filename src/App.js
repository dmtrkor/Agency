import Navigation from "./components/Pages/Navigation";
import Header from "./components/Pages/Header";
import Services from "./components/Pages/Services";
import Portfolio from "./components/Pages/Portfolio";
import About from "./components/Pages/About";
import Team from "./components/Pages/Team";
import Clients from "./components/Pages/Clients";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Pages/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Pages/Error404";


function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Navigation></Navigation>
            <Routes>
                <Route path="/" exact element={<Header></Header>}/>
                <Route path="/services" exact element={<Services></Services>}/>
                <Route path="/portfolio" exact element={<Portfolio></Portfolio>}/>
                <Route path="/about" exact element={<About></About>}/>
                <Route path="/team" exact element={<Team></Team>}/>
                <Route path="/clients" exact element={<Clients></Clients>}/>
                <Route path="/contact" exact element={<Contact></Contact>}/>
                <Route path="/*" exact element={<Error404></Error404>}/>
            </Routes>
        </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
