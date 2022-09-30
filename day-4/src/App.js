
import './App.css';
import { Navbar } from './Component/Navbar';
import {AllRoutes} from "./AllRoutes/Routes"
import { Footer } from './Component/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <AllRoutes/>
        <br/>
        <Footer />
    </div>
  )

  
}

export default App;
