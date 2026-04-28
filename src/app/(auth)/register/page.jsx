"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa6";

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handelRegisterForm = async (data) => {
    // console.log(data, "   hima");
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });

    console.log(res, "  Hima   ", error);
    if (error) {
      alert(error.message);
    } else {
      alert("Register  SuccessFully Your Account");
    }
  };

  //   console.log(watch("email"));

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white my-10">
        <h2 className="font-bold text-3xl text-center mb-3">
          Register Your Account{" "}
        </h2>

        {/* name  */}
        <form className="space-y-3" onSubmit={handleSubmit(handelRegisterForm)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              {...register("name", { required: "Name field is required" })}
              type="text"
              className="input"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          {/* photo  */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              {...register("photo", { required: "Photo field is required" })}
              type="text"
              className="input"
              placeholder="Enter Your Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>

          {/* email  */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              {...register("email", {
                required: "Email field is required",
              })}
              type="email"
              className="input"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          {/* password  */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password", {
                required: "Password field is required",
              })}
               type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Enter Your Password"
            />
            <span
              className=""
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              <FaEye></FaEye>
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
