import './App.css';

function App() {
  function applyEbf() {
    const fileInput = document.getElementById('ebf-upload');
    if (fileInput.files.length > 0) {
        alert('EBF applied: ' + fileInput.files[0].name);
    } else {
        alert('Please select an EBF file to upload.');
    }
}

function createOrs() {
    alert('Create ORS functionality coming soon!');
}

function importOrs() {
    alert('Import ORS functionality coming soon!');
}

  return (
    <div className="App">
      <div class="navbar">
        <img src="/infa-logo.png" alt="Informatica Logo"/>
        <h1>EnvBot</h1>
    </div>
    <div class="container">
        <div class="window">
            <h2>Apply EBF</h2>
            <input type="file" id="ebf-upload"/>
            <button onclick="applyEbf()">Upload and Apply</button>
        </div>
        <div class="window">
            <h2>Create and Import ORS</h2>
            <button onclick="createOrs()">Create ORS</button>
            <button onclick="importOrs()">Import ORS</button>
        </div>
    </div>
    </div>
  );
}

export default App;

{/* <header>
        <img src="/infa-logo.svg" alt="" />
      </header>
      <div className='form'>
        <p>Username</p>
        <input value="" placeholder='Your Name' />
        <p>Password</p>
        <input value="" placeholder='Your Password' />
        <p>Login</p>
        <button>Login</button>
      </div> */}
