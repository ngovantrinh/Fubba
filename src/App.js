import { Outlet } from "react-router";
import styles from "./App.module.scss";
import HomeLayouts from "./layouts/HomeLayouts";

function App() {
  return (
    <div className={styles.App}>
      <HomeLayouts>
        <Outlet></Outlet>
      </HomeLayouts>
    </div>
  );
}

export default App;
