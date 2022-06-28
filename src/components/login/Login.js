import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Login({ setToken }) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    document.body.classList.add('login-page')
  })

  /*
  const onSubmit = async e => {
    e.preventDefault();
    let token = {
      token: 'test123'
    }
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }*/

  const onSubmit = data => {
    setToken({token: 'test123'});
  }

  const errorStyle = {
    color: "red"
  };

  return(
    <div className="login-box">
      <div className="login-logo">
        <a href="#"><b>User</b>App</a>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Username" onChange={e => setUserName(e.target.value)} {...register("Username", { required: true })}/>
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user"></span>
                </div>
              </div>
            </div>
            {errors.Username && <span style={errorStyle}>This field is required</span>}
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} {...register("Password", { required: true })}/>
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            {errors.Password && <span style={errorStyle}>This field is required</span>}
            <div className="row">
              <div className="col-8">
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}