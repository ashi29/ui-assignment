import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import './App.css'
import { FilteringTable } from './components/FiltertingTable'

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/:page' element={<FilteringTable />}/>
      <Route path='/' element={<FilteringTable />}/>
      </Routes>
     
      {/* <FilteringTable /> */}
    </div>
  )
}

export default App
