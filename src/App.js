import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Navigation from './compo/Navigation'
import './App.css';
function App() {
  return (
    <div className="App">
      <Navigation/>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route exact path="/categorias">
        <Categorias/>
       </Route>
     </Switch>
      
    </div>
  );
}

export default App;
