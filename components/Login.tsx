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
      <div className='  bg-gray-200 '>
        <form onSubmit={handleSubmit} className='flex flex-col text-black pt-1'>
          <label htmlFor='login' className='w-full flex justify-center  '>
            login
          </label>
          <input
            className='w-full  flex justify-center '
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            id='login'
            type='text'
            autoComplete='off'
            required
          />
          <label htmlFor='password' className='p-1 w-full flex justify-center '>
            password
          </label>
          <input
            className='w-full '
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
