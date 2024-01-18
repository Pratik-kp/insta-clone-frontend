
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      {
        (localStorage.getItem("users")==undefined || localStorage.getItem("users")==null)?
        <LoginPage/>:
        <HomePage/>
      }
    </div>
  );
}

export default App;
