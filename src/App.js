
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'
import Loading from './components/Loading'
import router from './router'

function App() {
  return (
    <div className="App">
      {/* {router} */}
      <Login />
     
      <Register />
      <Dashboard />
    </div>
  );
}

export default App;
