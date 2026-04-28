"use client";
import Link from "next/link";
import img from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const userDetails = session?.user;
  console.log(userDetails, "hima");
  

  return (
    <div className="container mx-auto flex justify-between items-center py-5">
      <div></div>
      <ul className="flex gap-4 text-[#706F6F]">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>
      { userDetails ? (
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-green-700">
            hey , {userDetails?.name}
          </h2>
          <Image
            src={userDetails.image || img}
            height={50}
            width={70}
            alt="user"
            className="rounded-full"
          ></Image>
          <button
            onClick={async () =>
              await authClient.signOut()
            }
            className="btn btn-ghost bg-amber-300"
          >
            LogOut
          </button>
        </div>
      ) : (
        <button className="btn btn-primary">
          <Link href="/login">Login </Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import userAvatar from "@/assets/user.png";
// import NavLink from "./NavLink";
// import { authClient } from "@/lib/auth-client";

// const Navbar = () => {
//   const { data: session, isPending } = authClient.useSession();
//   const user = session?.user;

//   console.log(user, isPending, "user");

//   return (
//     <div className="container mx-auto flex justify-between gap-4 mt-6">
//       <div></div>
//       <ul className="flex justify-between items-center text-gray-700 gap-3">
//         <li>
//           <NavLink href={"/"}>Home</NavLink>
//         </li>
//         <li>
//           <NavLink href={"/about-us"}>About</NavLink>
//         </li>
//         <li>
//           <NavLink href={"/career"} className={"text-yellow-500"}>
//             Career
//           </NavLink>
//         </li>
//       </ul>

//       {isPending ? (
//         <span className="loading loading-spinner loading-lg"></span>
//       ) : user ? (
//         <div className="flex items-center gap-2">
//           <h2>Hello, {user.name}</h2>
//           <Image
//             src={ userAvatar}
//             alt="User avatar"
//             width={60}
//             height={60}
//           />
//           <button
//             className="btn btn-primary"
//             onClick={async () => await authClient.signOut()}
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <button className="btn btn-primary">
//           <Link href={"/login"}>Login</Link>
//         </button>
//       )}
//     </div>
//   );
// };

// export default Navbar;

























