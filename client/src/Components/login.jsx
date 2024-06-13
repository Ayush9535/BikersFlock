import logo from "../assets/bflogo.png"
import { Link } from "react-router-dom"
import { useState } from "react"
export default function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username,password)
  }
    return (
        <div className="flex h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-20"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-5 text-center text-bforange text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value = {username}
                  onChange={(e)=>{setUsername(e.target.value)}}
                  required
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bforange sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-bforange">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bforange sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-bforange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-bforange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <Link to={"/signup"}>
            <p className="mt-3.5 text-center text-sm text-gray-500">
              New Here?{' '}
              <span className="font-semibold leading-6 text-bforange">
                Create new account
              </span>
            </p>
            </Link>
          </div>
        </div>
    )
  }