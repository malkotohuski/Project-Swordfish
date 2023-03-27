import React, { useState } from "react"
import { Fragment } from 'react';



export const Login = (props) => {
  const [loginMode, setLoginMode] = useState("login");


  const chancheLoginMode = () => {
    setLoginMode(loginMode === "login" ? "newRegistration" : "login")
  }

  if (loginMode === "login") {
    return (
      <Fragment>
        <div className="Login-form-container">
          <form className="Login-form" >
            <div className="Login-form-content">
              <h3 className="Login-form-title">Login</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={chancheLoginMode}>
                  New Registration
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div className="Login-form-container">
        <form className="Login-form">
          <div className="Login-form-content">
            <h3 className="Login-form-title">New Registration</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={chancheLoginMode}>
                Login
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Illidan Stormrage"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Repeat password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Repeat password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  )
}