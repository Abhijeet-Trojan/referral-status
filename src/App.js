import './App.css';
import React from 'react';
import DataTable from './components/DataTable';

function App() {
  return (
    <>
      <div className='container'>
        <div className='upperSection'>
          <span>Referral Staus</span>
        </div>

        <div className='lowerSection'>
          <DataTable />
        </div>

        {/* <div className='bg-sky-400 h-screen flex'>
          <ReferralTable className='' />
        </div> */}
      </div>
    </>
  );
}

export default App;
