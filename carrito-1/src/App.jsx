import 'boxicons';
import Header from "./components/Header/Header.jsx"
import Productos from './components/Productos/Productos.jsx';
import Paginas from './components/Paginas.jsx';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Paginas/>
      </Router>
    </div>
  )
}

export default App
