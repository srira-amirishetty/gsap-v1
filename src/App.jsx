import gsap from "gsap";
import {ScrollTrigger,SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <>
    <div>
      <h1 className="text-9xl text-black">Hello js</h1>
    </div>
      
    </>
  )
}

export default App
