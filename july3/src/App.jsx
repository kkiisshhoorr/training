import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SimpleForm from './formfilling'; // Make sure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;