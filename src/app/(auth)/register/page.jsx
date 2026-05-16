"use client";
 
import { useForm } from "react-hook-form";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handelRegisterFunc = (data) => {
    console.log(data);
  };

 
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center items-center">
        <div className="card bg-[#49231697] image-full w-96 shadow-sm">
          <div className=" card text-white p-10">
            <h2 className=" text-2xl font-bold flex justify-center">
              Register your account
            </h2>
            <form onSubmit={handleSubmit(handelRegisterFunc)}>
              <fieldset className="fieldset">
                <legend className="fieldset-legend  text-white">
                  Your Name
                </legend>
                <input
                  type="text"
                  className="input text-black"
                  placeholder="Enter Your Name"
                  {...register("name", {
                    required: "Name field is required",
                  })}
                />
                {errors.name && (
                  <p className="text-[#763d22]">{errors.name.message}</p>
                )}
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend  text-white">
                  Photo URL
                </legend>
                <input
                  type="text"
                  className="input text-black"
                  placeholder="Enter Your Photo"
                  {...register("photo", {
                    required: "Photo field is required",
                  })}
                />
                {errors.photo && (
                  <p className="text-[#763d22]">{errors.photo.message}</p>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend  text-white">Email</legend>
                <input
                  type="email"
                  className="input text-black"
                  placeholder="Enter Your Email"
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
                  Password
                </legend>
                <input
                  type="password"
                  className="input text-black"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: "Password field is required",
                  })}
                />
                {errors.password && (
                  <p className="text-[#763d22]">{errors.password.message}</p>
                )}
              </fieldset>
              <label className="label mt-4">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox text-white "
                  
                />
                Agree Terms & Conditions
              </label>

              <div className="my-3">
                <button className="btn bg-[#763d22] text-white w-full">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
