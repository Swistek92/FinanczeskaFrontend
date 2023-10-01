"use client";
import React, { useState } from "react";
import { submitFormType } from "@/types";
import useLocalStorage from "@/helpers/useLocalStorage";
import config from "@/config/config";
import Chat from "./Chat";
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [apiKey, setApiKey] = useLocalStorage<string>(
    config.apiKeyStorageName,
    ""
  );
  const handleSubmit = async (e: submitFormType) => {
    e.preventDefault();
    setApiKey("lalalala");
  };

  if (apiKey === "") {
    return (
      <div className='flex flex-col  bg-gray-200 md:flex-row'>
        <form onSubmit={handleSubmit} className='text-black pt-1'>
          <label htmlFor='login' className='p-1  w-full md:w-1/4 '>
            login
          </label>
          <input
            className='w-full md:w-1/4 '
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            id='login'
            type='text'
            autoComplete='off'
            required
          />
          <label htmlFor='password' className='p-1 w-full md:w-1/4 '>
            password
          </label>
          <input
            className='w-full md:w-1/4 '
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id='password'
            type='password'
            autoComplete='off'
            required
          />
          <button type='submit' className='btn-primary w-full mt-1 '>
            login
          </button>
        </form>
      </div>
    );
  } else {
    return <Chat />;
  }
};

export default Login;
