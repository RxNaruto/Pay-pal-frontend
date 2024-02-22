import { NavButtons } from "./components/NavButtons";

import { NavElements } from "./components/NavElements"

const App=()=>{
  return(
    <>
    <NavElements  label={"Hello"}/>
   
    <div>
    <NavButtons label={"Login"} />
    </div>
    
    
    </>
  )
}
export default App;