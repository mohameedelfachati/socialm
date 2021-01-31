
import './App.css';

import Sidebar from './Sidebare1/Sidebare';
import Feed from './Feed/Feed';
import Login from './Login/Login';
import Header from './Header/Header';
function App() {
  
  const user=null;
  return (
    <div className="App">
      {!user ? <Login/> : 
      <div>
      <Header />
    <div className='App_body'>
      <Sidebar />
      <Feed />
      
    </div>
    </div>}
    
    
       
    </div>
  );
}

export default App;
