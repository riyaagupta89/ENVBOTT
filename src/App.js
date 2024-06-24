import './App.css';
import { useState } from 'react';

function App() {

  const [sidebar,setSidebar]=useState(true);
  const [home,setHome]=useState(true);
  const [applyEBF,setApplyEBF]=useState(false);
  const [createORS,setCreateORS]=useState(false);
  const [importORS,setImportORS]=useState(false);
  const [restart,setRestart]=useState(false);

  const handleHomeClick = () => {
    setApplyEBF(false);
    setCreateORS(false);
    setImportORS(false);
    setRestart(false);
    setHome(true);
  }
  const handleApplyEBFClick = () => {
    setApplyEBF(true);
    setCreateORS(false);
    setImportORS(false);
    setRestart(false);
    setHome(false);
  }
  const handleCreateORSClick = () => {
    setApplyEBF(false);
    setCreateORS(true);
    setImportORS(false);
    setRestart(false);
    setHome(false);
  }
  const handleImportORSClick = () => {
    setApplyEBF(false);
    setCreateORS(false);
    setImportORS(true);
    setRestart(false);
    setHome(false);
  }
  const handleRestartClick = () => {
    setApplyEBF(false);
    setCreateORS(false);
    setImportORS(false);
    setRestart(true);
    setHome(false);
  }

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
      <div className='home-rest'>
      {sidebar&&
        <div className='sidebar-container'>
          <div className='sidebar-box' onClick={handleHomeClick} style={{backgroundColor:home?'black':'#333'}}>
            <img src="home.jpg" alt=""/>
            <p className='sidebar-text'>Home</p>
          </div>
          <div className='sidebar-box' onClick={handleApplyEBFClick} style={{backgroundColor:applyEBF?'black':'#333'}}>
            <img src="home.jpg" alt="" />
            <p className='sidebar-text'>Apply EBF</p>
          </div>
          <div className='sidebar-box' onClick={handleCreateORSClick} style={{backgroundColor:createORS?'black':'#333'}}>
            <img src="home.jpg" alt="" />
            <p className='sidebar-text'>Create ORS</p>
          </div>
          <div className='sidebar-box' onClick={handleImportORSClick} style={{backgroundColor:importORS?'black':'#333'}}>
            <img src="home.jpg" alt="" />
            <p className='sidebar-text'>Import ORS</p>
          </div>
          <div className='sidebar-box' onClick={handleRestartClick} style={{backgroundColor:restart?'black':'#333'}}>
            <img src="home.jpg" alt="" />
            <p className='sidebar-text'>Restart</p>
          </div>
        </div>
      }
      <div className="right-container">
      {home&&
      <div>
        <p>This is Home</p>
        </div>
      }
      {applyEBF&&
      <div>
        <p>This is Apply EBF</p>
        </div>
      }
      {createORS&&
      <div>
        <p>This is Create ORS</p>
        </div>
      }
      {importORS&&
      <div>
        <p>This is Import ORS</p>
        </div>
      }
      {restart&&
      <div>
        <p>This is Restart</p>
        </div>
      }
      </div>
      </div>
    </div>
  );
}

export default App;

