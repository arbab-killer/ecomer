import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import toast from "react-hot-toast";
import { app } from "../firebase";
const auth = getAuth(app);
const GoogleProvgider = new GoogleAuthProvider();
const Signin = () => {
  const signupwithgogle = () => {
    signInWithPopup(auth, GoogleProvgider);
  };
  const [notify, setnotify] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((data) => {
      setnotify(true);
    });
  };

  if (notify) {
    toast.success("you are login successfull");
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border-2 bg-slate-500">
        <div className="  max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome back to <span className="text-[#7747ff]">App</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Login to your account
          </div>
          <form className="flex flex-col gap-3">
            <div className="block relative">
              <label
                for="email"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                Email
              />
              <input
                required
                placeholder="Enter you Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="text"
                id="email"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                for="password"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                Password
              />
              <input
                required
                placeholder="Enter your Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="text"
                id="password"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>

            <button
              onClick={Signin}
              type="submit"
              className="btn bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-[18px] font-normal"
            >
              login
            </button>
            <div className=" ml-[115px]  w-[100px]"> OR </div>
            <button onClick={() => signupwithgogle()}>
              {" "}
              <img
                className=" ml-auto mr-auto w-[100px]"
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=893&height=600&name=image8-2.jpg"
                alt=""
              />
            </button>
          </form>
          <div class="text-sm text-center mt-[1.6rem]">
            You hav't account{" "}
            <Link to={"/"} className="text-sm text-[#7747ff]">
              click to Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
