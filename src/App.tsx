import React from 'react';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import Points from './components/Points';

const App: React.FC = () => (
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
