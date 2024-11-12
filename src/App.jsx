//data import

import PageList from "./Pages/PageList.jsx";

// React imports

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";

//CSS import

import "./App.css";

function App() {
  return (
    <div className="main">
      <Router>
        <aside className="nav_list">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              {PageList.map((page, i) => (
                <li key={i}>
                  <Link to={page.path}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="main_content">
          <div></div>
          <Routes>
            <Route path="/" element={<Home />} />

            {PageList.map((page, i) => (
              <Route key={i} path={page.path} element={page.element} />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
