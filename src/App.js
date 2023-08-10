import {
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import styles from "./App.module.scss";
import HomeLayouts from "./layouts/HomeLayouts";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <div className={styles.App}>
    <Routes>
      <Route path="/" element={<HomeLayouts />}>
        <Route path="" element={<Home/>}></Route>
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
    </div>
  );
}

export default App;
