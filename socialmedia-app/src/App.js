// import Home from "./Page/Home/Home";
import Profile from "./Page/Profile/Profile";
// import Auth from "./Page/Auth/Auth";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
