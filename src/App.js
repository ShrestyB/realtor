import './App.css';
import Companies from './Components/Companies/Companies';
import Headers from './Components/Headers/Headers';
import Hero from './Components/Hero/Hero';
import Residency from './Components/Residencies/Residency';
function App() {
    return(
        <>
        <div className="App">
            <div>
<div className='white-gradient'/>

            <Headers/>
            <Hero/>
        </div>
        {/* <Companies/> */}
        <Residency/>
        </div>

        </>
    )

}

export default App;
