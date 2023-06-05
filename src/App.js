import  {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


import Home from './Pages/Home'
import Header from "./Components/Header/Header";
import Footer from "./Components/footer/Footer";
import Courses from "./Components/cours-section/Courses";
import Listcours from "./redux/Pagecorses/Listcours";
import Addcours from "./redux/Pagecorses/Addcours";

function App() {
  return (
    <div>
    <Header/>
    
     <Listcours/>
     <Addcours/>
   
    
    
    
    
    </div>
  )
}

export default App