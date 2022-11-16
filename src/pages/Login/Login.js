import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const {logIn, LoginWithGoogle} = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate()

  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
    .then(() => {
      form.reset();
      navigate('/')
      setSuccess('Login Successfully.')
      setError('')

    })
    .catch(error => {
      console.error(error)
      setSuccess('')
      setError(error.message)

    })
  }

  const handelGoogleLogin = () => {
    LoginWithGoogle(googleProvider)
    .then(() => {
      navigate('/')

    })
    .catch(error => console.error(error))
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
              <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
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
            <button onClick={handelGoogleLogin} className="btn btn-outline btn-warning w-full">Login with google</button>
          </div>
          <p className='text-red-600'>{error}</p>
          <p className='text-green-600'>{success}</p>
          <p>New to fresh food? <Link className='text-blue-600' to='/register'>Register</Link></p>
        </div>
      </div>
    </div>

    );
};

export default Login;