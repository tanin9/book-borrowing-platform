"use client";
 
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handelLoginFunc = (data) => {
    console.log(data);
  };
  
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center items-center">
        <div className="card bg-[#49231697] image-full w-96 shadow-sm">
          <div className=" card text-white p-10">
            <h2 className=" text-2xl font-bold  flex justify-center">
              Login your account
            </h2>
            <form onSubmit={handleSubmit(handelLoginFunc)}>
              <fieldset className="fieldset">
                <legend className="fieldset-legend  text-white">
                  Enter Your Email address
                </legend>
                <input
                  type="email"
                  className="input text-black"
                  placeholder="Type here email"
                  {...register("email", {
                    required: "Email field is required",
                  })}
                />
                {errors.email && (
                  <p className="text-[#763d22]">{errors.email.message}</p>
                )}
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend  text-white">
                  Enter Your Password
                </legend>
                <input
                  type="password"
                  className="input text-black"
                  placeholder="Type here password"
                  {...register("password", {
                    required: "Password field is required",
                  })}
                />
                {errors.password && (
                  <p className="text-[#763d22]">{errors.password.message}</p>
                )}
              </fieldset>

              <div className="my-3">
                <button className="btn bg-[#763d22] text-white w-full">
                  Login
                </button>
              </div>
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  href={"/register"}
                  className="text-warning"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
