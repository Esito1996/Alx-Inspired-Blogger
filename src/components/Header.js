import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup,signOut } from "firebase/auth";
import Logo from "../assets/logo.png";
import { useState } from "react";

export const Header = () => {

  const [isAuth,setIsAuth]=useState(JSON.parse(localStorage.getItem("isAuth"))||false);

  function handleLogin(){
    signInWithPopup(auth, provider).then((result)=>{
      setIsAuth(true);
      localStorage.setItem("isAuth",true);
    })
  }


   function handleLogout() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth",false);
  }


  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="My Logo" />
        <span>Alx Inspired Blogger</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>Home</NavLink>
        {isAuth ? (<>
          <NavLink to="/create" className="link">Create</NavLink>
          <button onClick={handleLogout} className="auth"><i className="bi bi-door-closed"></i>Logout</button>
        </>
        ):(
          <button onClick={handleLogin} className="auth"><i className="bi bi-door-open"></i>Login</button>
        )}

      </nav>
      </header>
  )
}

