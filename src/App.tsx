import React from 'react';
import Map from './Map/Map';
import Sidebar from './Sidebar/Sidebar';
import Points from './Points/Points';

const App = () => (
  <>
    <header>
      <h1>Map App</h1>
    </header>
    <main className="main-block">
      <Sidebar />
      <div className="content-block">
        <Map />
        <Points />
      </div>
    </main>
  </>
);

export default App;
