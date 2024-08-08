import Layout from "./components/Layout/Layout.tsx";
import './App.scss'
import Main from "./components/Main/Main.tsx";
import {useState} from "react";

function App() {
  const [nav,setNav] = useState<number>(4);

  return <div className={'App'}>
      <Layout setNavItem={setNav} navItem={nav}>
        <Main navItem={nav}/>
      </Layout>
  </div>
}

export default App;
