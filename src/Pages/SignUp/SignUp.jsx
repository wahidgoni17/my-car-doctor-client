import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import SharedLogin from "../Shared/SharedLogin/SharedLogin";
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)
        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>{console.log(error)})
    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">SignUp</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input text-white input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  className="input text-white input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  className="input text-white input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">Already Have an Account <Link className="text-orange-500 font-bold" to="/login">Go to Login</Link></p>
            <SharedLogin></SharedLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
