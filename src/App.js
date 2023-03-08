import Header from "./components/header";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu />
        <div style={{ background: 'blue', width: '100%' }}>

        </div>
      </div>
    </div>
  );
}

export default App;
