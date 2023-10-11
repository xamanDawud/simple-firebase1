import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../../firebase.init";

let auth = getAuth(app);
let githubProvider = new GithubAuthProvider();
const LoginGithub = () => {
  let [user, setUser] = useState(null);

  let githubLoginHandler = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  let githubLogOutHandler = () => {
    signOut(auth)
      .then()
      .catch((e) => {
        console.log(e.message);
      });
    setUser(null);
  };
  return (
    <div>
      {user && (
        <div className="">
          <h1 className="text-3xl font-bold text-gray-400">
            Name: {user?.displayName}
          </h1>
          <h3>Email:{user?.email}</h3>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
      {user ? (
        <button
          onClick={githubLogOutHandler}
          className="btn btn-outline btn-accent mt-5"
        >
          LogOut Github
        </button>
      ) : (
        <button
          onClick={githubLoginHandler}
          className="btn btn-outline btn-accent mt-5"
        >
          Login GitHub
        </button>
      )}
    </div>
  );
};

export default LoginGithub;
