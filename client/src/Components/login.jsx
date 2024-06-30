import logo from "../assets/bflogo.png"
import { Link , useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaRegEyeSlash } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [showPassword,setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:3000/login",{username,password})
      .then((res)=>{
        toast.success(res.data.message , {autoClose: 1200 , position: "top-center"})
        sessionStorage.setItem("token",res.data.token)
        sessionStorage.setItem("loggedin",true)
        setTimeout(()=>{navigate("/")},1200)
      })
      .catch((err)=>{
        toast.error(err.response.data.message , {autoClose: 1200 , position: "top-center"})
        console.log(err)
      })
  }
    return (
        <div className="flex h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-20"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="w-[70%] mt-10 sm:mx-auto md:w-[25%]">
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
                  placeholder="Enter Username"
                  className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
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
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    autoComplete="current-password"
                    required
                    placeholder="Enter Password"
                    className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {showPassword ? 
                  <RxEyeOpen className="absolute top-0 right-[4%] translate-y-2/4 cursor-pointer" onClick={()=>setShowPassword(!showPassword)}/>
                  : <FaRegEyeSlash className="absolute top-0 right-[4%] translate-y-2/4 cursor-pointer" onClick={()=>setShowPassword(!showPassword)}/>}
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

          <div className="flex w-[25%] items-center gap-2 py-6 text-sm text-slate-600">
              <div className="h-px w-full bg-slate-400 mr-2"></div>
              OR
              <div className="h-px w-full bg-slate-400 ml-2"></div>
          </div>

          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-2">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
              <span>Continue with Google</span>
          </button>

          <ToastContainer />
        </div>
    )
  }