import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handelLogin = event => {
    event.preventDefault();
  }
    return (
      <div>
      <div className="hero card  w-2/4 mx-auto  shadow-2xl bg-base-100 my-12">
        <div className="card-body">
          <form onSubmit={handelLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-bold text-center">Please Login</span>
              </label>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="Email" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="Password" className="input input-bordered w-full" />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary w-full" value="Login" />
            </div>
          </form>

          <div className='my-3'>
            <button className="btn btn-outline btn-warning w-full">Login with google</button>
          </div>

          <p>New to fresh food? <Link className='text-blue-600' to='/register'>Register</Link></p>
        </div>
      </div>
    </div>

    );
};

export default Login;