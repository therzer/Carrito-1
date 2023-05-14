import 'boxicons';
import Header from "./components/Header/Header.jsx"
import Productos from './components/Productos/Productos.jsx';
import Paginas from './components/Paginas.jsx';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {DataProvider} from "./context/DataProvider.jsx"
import Carrito from './components/Carrito/Carrito.jsx';


function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Router>
          <Header/>
          <Carrito/>
          <Paginas/>
        </Router>
      </div>
    </DataProvider>
  )
}

export default App
