import "./styles/App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import CreateHabit from './components/CreateHabit';
import Home from './components/Home';
import Navbar from './components/Navbar'
import ViewHabit from "./components/ViewHabit";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/createhabit" element={<CreateHabit/>}/>
          <Route path="/post/:postId" element={<ViewHabit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
