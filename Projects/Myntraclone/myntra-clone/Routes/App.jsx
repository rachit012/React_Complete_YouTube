import Header from "../src/components/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../src/components/Fetchitems";

function App() {


  return (
    <>
    <Header/>
    <FetchItems/>
    <Outlet />
    <Footer/>
    
    </>
  )
}

export default App;