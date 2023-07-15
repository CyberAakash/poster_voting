import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
function App() {

  return (
    <>
      <Router>
        <div className="relative flex flex-col items-center justify-center w-screen overflow-hidden min-h-fit px-0 sm:px-14 py-0 m-0">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {/* <Route exact path="/trains" element={<Read />} />
            <Route path="/view/:tname" element={<ViewTrain />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
