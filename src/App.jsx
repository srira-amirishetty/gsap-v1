import gsap from "gsap";
import {ScrollTrigger,SplitText} from "gsap/all";
import Navbar from "./components/navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <>
    <Navbar />
      
    </>
  )
}

export default App
