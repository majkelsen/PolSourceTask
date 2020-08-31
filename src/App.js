import React from 'react';
import './style/App.css';
// import image from './directStyle.png'

import DataTable from './components/DataTable.js'
import AddForm from './components/AddForm.js'

const App = () => {
  return (
    <div className="App">
      <AddForm />
      <DataTable />
      {/* <img src={image} alt="directStyle" /> */}
    </div>
  );
}



export default App;
