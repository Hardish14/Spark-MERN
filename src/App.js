import "./App.css";
import Auth from "./pages/Auth/Auth";
// import Scrollbar from "./components/Scrollbar/Scrollbar";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      {/* <Scrollbar /> */}
      <div className="App">
        <div className="blur" style={{top: '-18%' , right: '0'}}></div>
        <div className="blur" style={{top: '36%' , left:'-8rem'}}></div>
        {/* <Home /> */}
        {/* <Profile /> */}
        <Auth />
      </div>
    </>
  );
}

export default App;
