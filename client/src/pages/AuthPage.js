import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';
import './styles/AuthPage/main.css';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message(data.message);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className="row">
      <div className="like-form">
        <div className="wrap-form">
          <span className="like-title">Welcome</span>

          <div className="wrap-input">
            <input
              className="like-input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={changeHandler}
            />
            <span className="focus-input"></span>
          </div>

          <div className="wrap-input">
            <input
              className="like-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={changeHandler}
            />
            <span className="focus-input"></span>
          </div>

          <div className="box-button">
            <button className="like-button" disabled={loading} onClick={loginHandler}>
              Login
            </button>
          </div>

          <div className="box-button">
            <button className="like-button" disabled={loading} onClick={registerHandler}>
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
