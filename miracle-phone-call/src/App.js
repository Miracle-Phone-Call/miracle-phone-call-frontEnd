import './App.css';
import Landing from './Components/Landing';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Chats from './Components/Chats';
import ChatRoom from './Components/ChatRoom';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/chats" element={<Chats />}/>
        <Route path="/chatroom" element={<ChatRoom />}/>
      </Routes>
    </div>
  );
}

export default App;
