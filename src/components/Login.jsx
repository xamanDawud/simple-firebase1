import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../../firebase.init";
import LoginGithub from "./LoginGithub";

let auth = getAuth(app);
let provider = new GoogleAuthProvider();
const Login = () => {
  let [user, setUser] = useState(null);
  //Google Authentication Handler
  let googleLoginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  let googleLogOutHandler = () => {
    signOut(auth)
      .then()
      .catch((e) => {
        console.log(e.message);
      });
    setUser(null);
  };
  console.log(user);
  return (
    <div className="text-black">
      {user && (
        <div>
          <h1 className="text-3xl font-bold text-gray-400">
            Name: {user?.displayName}
          </h1>
          <h3>Email:{user?.email}</h3>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
      <div className="flex flex-col w-[300px] mx-auto mt-10">
        <input
          type="text"
          placeholder="Place your Email "
          className="input input-bordered input-primary w-full max-w-xs mt-5"
        />
        <input
          type="text"
          placeholder="Place your Email "
          className="input input-bordered input-primary w-full max-w-xs mt-5"
        />
        <button className="btn btn-outline btn-accent mt-5">Login</button>
        {user ? (
          <button
            onClick={googleLogOutHandler}
            className="btn btn-outline btn-accent mt-5"
          >
            Google Logout
          </button>
        ) : (
          <button
            onClick={googleLoginHandler}
            className="btn btn-outline btn-accent mt-5"
          >
            Google Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
