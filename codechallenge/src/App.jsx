
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AddPlayer from './AddPlayer';
import DisplayAll from './DisplayAll';
import UpdatePlayer from "./UpdatePlayer";
import DeletePlayer from "./DeletePlayer";

function App() {


  return (
    <BrowserRouter>
      <div>
        
        <h1>This is the Player App</h1>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">| Home | </Link>
          <Link to="/add" className="navbar-brand">| Add Player | </Link>
          <Link to="/update" className="navbar-brand">| Update Player | </Link>
          <Link to="/displayAll" className="navbar-brand">| DisplayAll Players |</Link>
          <Link to="/delete" className="navbar-brand">| delete Players |</Link>

        </nav>

        <div className="container mt-3">
          <Routes>
             <Route path="/displayAll" element={<DisplayAll/>} />
            <Route path="/add" element={<AddPlayer />} />
             <Route path="/update" element={<UpdatePlayer />} />
              <Route path="/delete" element={<DeletePlayer/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  )
}

export default App
