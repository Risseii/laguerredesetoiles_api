import React from 'react';
import {Route, Switch,Link, BrowserRouter} from 'react-router-dom';
import Home from './componentes/Home/Home';
import Persona from './componentes/Persona/Persona';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/:id" render={(routerProps) => <Persona {...routerProps}/>} />   
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
