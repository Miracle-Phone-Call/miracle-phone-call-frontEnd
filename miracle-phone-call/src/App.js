import './App.css';
import Landing from './Components/Landing';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Chats from './Components/Chats';
import Profile from './Components/Profile';
import FriendProfile from './Components/FriendProfile'
import {Routes, Route } from 'react-router-dom'
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/chats" element={<Chats />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path='/search' element = {<Search />}/>
        <Route path='/profile/:username' element = {<FriendProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
