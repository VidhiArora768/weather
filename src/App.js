
import './App.css';
import Navbar from './Components/Navbar'
import React from 'react'
import Item from './Components/Item'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";  



//$env:NODE_OPTIONS = "--openssl-legacy-provider"
//7cd13524b1e548e9a50165506232803

function App() {
  return (
 
    <Router>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Item key="india"   country="india" />}>
        </Route>
        <Route exact path="/usa" element={<Item key="usa"   country="usa"  />}>
        </Route>
        <Route exact path="/london" element={<Item key="london"   country="london"  />}>
        </Route>
        <Route exact path="/pakistan" element={<Item key="pakistan"   country="pakistan"  />}>
        </Route>
        <Route exact path="/japan" element={<Item key="japan"   country="japan"  />}>
        </Route>
        <Route exact path="/australia" element={<Item key="australia"   country="australia"  />}>
        </Route>
        <Route exact path="/germany" element={<Item key="germany"   country="germany"  />}>
        </Route>
        <Route exact path="/canada" element={<Item key="canada"   country="canada"  />}>
        </Route>
    </Routes>
    <Item/>
    </Router>

  );
}

export default App;
