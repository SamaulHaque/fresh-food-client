import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleRegister = event => {
    event.preventDefault();
  }
  return (
    <div>
      <div className="hero card  w-2/4 mx-auto  shadow-2xl bg-base-100 my-12">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-bold text-center">Please Register</span>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered w-full" />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary w-full" value="Register" />
            </div>
          </form>

          <div className='my-3'>
            <button className="btn btn-outline btn-warning w-full">Register with google</button>
          </div>

          <p>Already have an account? <Link className='text-blue-600' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;