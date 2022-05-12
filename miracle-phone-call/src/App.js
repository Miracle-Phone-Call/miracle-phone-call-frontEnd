import './App.css';
import Landing from './Components/Landing';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ChatRoom from './Components/Chat-room';
import Chat from './Components/Chat';
function App() {
  return (
    <div className="App">
      <Landing />
      <Signup />
      <Login />
      <ChatRoom />
      <Chat />
    </div>
  );
}

export default App;
