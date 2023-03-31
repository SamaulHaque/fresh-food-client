import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
  useTitle('Register')
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const {createUser} = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(() => {
      form.reset();
      setSuccess('Register Successfully.')
      setError('')
    })
    .catch(error => {
      console.error(error)
      setSuccess('')
      setError(error.message)
    })
   

  }
  return (
    <div>
      <div className="hero card  w-2/4 mx-auto  shadow-2xl bg-base-100 my-12" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-bold text-center">Please Register</span>
              </label>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
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
              <input type="submit" className="btn btn-primary w-full" value="Register" />
            </div>
          </form>

          <p className='text-green-600'>{success}</p>
          <p className='text-red-600'>{error}</p>

          <p>Already have an account? <Link className='text-blue-600' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;