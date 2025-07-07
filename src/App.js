import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Certificates from "./container/Certificates/Certificates";
// import Research from "./container/Research/Research";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Work />
    <Testimonial />
    <Certificates/>
    <Footer />
  </div>
);

export default App;
