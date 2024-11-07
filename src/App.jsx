import './App.css'
import './index.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 10,
        followings: 20,
    });

  return (
    <div className="app">
        <TwitterContext.Provider value={{user, stats}}>
        <Navigation/>
        <Body/>
        </TwitterContext.Provider>
    </div>
  )
}

export default App
