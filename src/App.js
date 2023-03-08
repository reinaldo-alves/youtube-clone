import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";

function App() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu openMenu={openMenu} />
        <div style={{ background: 'blue', width: '100%' }}>

        </div>
      </div>
    </div>
  );
}

export default App;
