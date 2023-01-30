
import './App.css';
import About from './components/About/About';
import Leaders from './components/Leaders/Leaders';
import News from './components/News/News';
import SideBar from './components/SideBar/SideBar';
import Players from './components/Players/Players';
import Standings from './components/Standings/Standings';
import Teams from './components/Teams/Teams';

function App() {
  return (
    <>
    <SideBar></SideBar>
    <About></About>
    <Leaders></Leaders>
    <News></News>
    <Players></Players>
    <Standings></Standings>
    <Teams></Teams>
    </>
  );
}

export default App;
