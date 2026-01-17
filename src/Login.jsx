import "./App.css";
import { useState } from "react";
import { auth } from "./firebase/firebase.js";
import {
  signInWithEmailAndPassword, /// firebase e log in korar jonno eta use hoi
  signInWithPopup, ///google, github etc dia login korte use hoi
  GoogleAuthProvider, ///ami je google dia login korbo seta firebase ke bole...
  GithubAuthProvider
} from "firebase/auth";
 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); ///route er jonno use hoi

  const googleProvider = new GoogleAuthProvider(); 
  const githubProvider = new GithubAuthProvider(); 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      ///loading e time lagte pare tai await use kore...
      console.log("Logged in:", userCredential.user);
      navigate("/");
    } catch (error) {
      window.alert("Login failed. Please check your credentials and try again."+ error.message);
      console.error("Error:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
    navigate("/");
  };

  const handleGithubLogin = async () => {
    await signInWithPopup(auth, githubProvider);
    navigate("/");
  };
  
  return (
    <div className="border px-5 py-7 rounded-md relative top-30 lg:top-60 sm:left-[30%] lg:left-[40%] left-[10%] flex flex-col w-100 text-center">

      <p className="text-4xl py-3">Login</p>

      <input
        className="border text-2xl rounded-md px-3 mt-3 hover:bg-yellow-100 hover:scale-105 duration-300"
        type="email"
        placeholder="Email" ///empty screen hole eta show hobe...
        value={email}  ///user jeta input screen e dekbe...
        onChange={(e) => setEmail(e.target.value)} 
        ///onClick: user jokhon input e kicco likhe tokhon eta call hoi
      />

      <input
        className="border text-2xl rounded-md px-3 mt-3 hover:bg-yellow-100 hover:scale-105 duration-300"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="mt-4 bg-yellow-400 text-2xl rounded-md py-1 hover:bg-yellow-300 hover:scale-105 duration-300"
        onClick={handleLogin}
      >
        Login
      </button>
      <p className="py-3">Or continue with...</p>
      <button
        className="mt-4 bg-blue-500 text-white text-2xl rounded-md py-1  hover:bg-blue-300 hover:scale-105 duration-300"
        onClick={handleGoogleLogin}>
        Sign in with Google
      </button>

      <button
        className="mt-4 bg-blue-500 text-white text-2xl rounded-md py-1  hover:bg-blue-300 hover:scale-105 duration-300"
        onClick={handleGithubLogin}>
        Sign in with Github
      </button>
    </div>
  );
};

export default Login;
