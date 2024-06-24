import './App.css';
import { useState } from 'react';

function App() {

  const [sidebar,setSidebar]=useState(true);

  return (
    <div className='home-container'>
      <div className='home-navbar'>
        <div className='nav-left'>
          <img onClick={()=>setSidebar(!sidebar)} src="menu.png" className="menu-icon" alt="" />
          <img src="logo.png" alt="" className='infa-logo-icon' />
        </div>
        <div className='nav-right'>
          <p className='nav-right-text'>admin</p>
          <img src="help.png" alt="" />
        </div>
      </div>
      {sidebar&&
        <div className='sidebar-container'>
          <div className='sidebar-box'>
            <img src="home.jpg" alt=""/>
            <p className='sidebar-text'>Home</p>
          </div>
          <div className='sidebar-box'>
            <img src="home.jpg" alt="" />
            <p className='sidebar-text'>Apply EBF</p>
          </div>
          <div className='sidebar-box'>
            <img src="home.jpg" alt="" />
            <p className='sidebar-text'>Create ORS</p>
          </div>
          <div className='sidebar-box'>
            <img src="home.jpg" alt="" />
            <p className='sidebar-text'>Import ORS</p>
          </div>
          <div className='sidebar-box'>
            <img src="home.jpg" alt="" />
            <p className='sidebar-text'>Restart</p>
          </div>
        </div>
      }

    </div>
  );
}

export default App;

