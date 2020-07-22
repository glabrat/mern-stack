import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/layout/Layout'
import Navigation from './components/navigation/Navigation'
import CreateAnimal from './components/create-animal/CreateAnimal'

function App() {
  return (
    <Layout>
      <Router>
        <Navigation />
        <div className="container p-4">
          <Route path="/" component={CreateAnimal} />
        </div>
      </Router>
    </Layout>
  );
}

export default App;
