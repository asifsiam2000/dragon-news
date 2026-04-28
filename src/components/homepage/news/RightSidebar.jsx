"use client";

import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {

  const handelGithubSignIn =async () => {
     const data = await authClient.signIn.social({
        provider: "github"
    })
  }


  const handelGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log("hima", data);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Login With</h2>
      <div className="flex flex-col gap-2">
        <button
          className=" btn border-blue-500 text-blue-500"
          onClick={handelGoogleSignIn}
        >
          <FaGoogle /> Login With Google
        </button>
        <button className=" btn" onClick={handelGithubSignIn}>
          <FaGithub /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
