
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'
import Loading from './components/Loading'

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Loading /> */}
      <Register />
      <Dashboard />
    </div>
  );
}

export default App;
