import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import SharedLogin from "../Shared/SharedLogin/SharedLogin";
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
        .then(result=>{
            const loginUser = result.user
            console.log(loginUser)
            navigate(from, {replace: true})
        })
        .catch(error=>console.error(error))
    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input text-white input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input text-white input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center">New to Cars Doctor <Link className="text-orange-500 font-bold" to="/signup">Create An Account</Link></p>
            <SharedLogin></SharedLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
