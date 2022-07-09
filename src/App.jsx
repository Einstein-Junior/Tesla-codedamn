import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Preview from './Pages/preview/Preview';
import SolarRoof from './Pages/solar-roof/SolarRoof'

function App() {


  return (
    <div className="max-w-screen min-h-screen">
      <Routes>
        <Route path="/">
          <Route index element={<Preview />} />
          <Route path="solar-roof" element={<SolarRoof />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
