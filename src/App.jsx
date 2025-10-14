import FAQ from "./component/FAQ";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Reasons from "./component/Reasons";
import Subscribe from "./component/Subscribe";
import Trends from "./component/Trends";

const App = ()=> {
  return(
    <>
     <div id="html" className="bg-black text-white px-60 py-3">
     <Nav />
     <Trends />
     <Reasons />
     <FAQ />
     <Subscribe />
     <Footer />
     </div>
    </>
  );
}

export default App;

