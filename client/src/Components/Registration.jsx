import logo from "../assets/bflogo.png";
import { useState } from "react";
import { Link  , useNavigate} from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [fullName, setFullname] = useState('');
  const [errorUserNameMessage, setErrorUserNameMessage] = useState('');
  const [errorFullNameMessage, setErrorFullNameMessage] = useState('');
  const [showPassword,setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fullName,username,password,email,gender)
    const specialCharacterPattern = /[^a-zA-Z0-9]/;

    if (specialCharacterPattern.test(username)) {
      setErrorUserNameMessage('Username cannot contain special characters.');
    }
    else if (!specialCharacterPattern.test(fullName)) {
      setErrorFullNameMessage('Name cannot contain special characters.');
    }else{
      axios.post('http://localhost:3000/register', {
        fullName: fullName,
        username: username,
        password: password,
        email: email,
        gender: gender
      })
      .then((res)=>{
        console.log(res)
        toast.success('User registered successfully' , {autoClose: 1200, position: "top-center"})
        setTimeout(()=>{
          navigate('/login')
        })
      })
      .catch((err)=>{
        console.log(err)
        toast.error(err.response.data.message , {autoClose: 1200, position: "top-center"})
      })
  }}

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-20"
          src={logo}
          alt="Your Company"
        />
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create new account
        </h2>
      </div>

      <div className="w-[70%] mt-5 sm:mx-auto md:w-[30%]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
            <div className="">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={fullName}
                placeholder="Enter Full Name"
                onChange={(e) => setFullname(e.target.value)}
                className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
              {errorFullNameMessage && <p className="text-red-500 mt-2">{errorFullNameMessage}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="">
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
              {errorUserNameMessage && <p className="text-red-500 mt-2">{errorUserNameMessage}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                placeholder="Enter Email"
                className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter Password"
                className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insetsm:text-sm sm:leading-6"
              />
              {showPassword ? 
                  <RxEyeOpen className="absolute top-0 right-[4%] translate-y-2/4 cursor-pointer" onClick={()=>setShowPassword(!showPassword)}/>
                  : <FaRegEyeSlash className="absolute top-0 right-[4%] translate-y-2/4 cursor-pointer" onClick={()=>setShowPassword(!showPassword)}/>}
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center justify-between">
              <label htmlFor="gender" className="block text-sm mr-5 font-medium leading-6 text-gray-900">
                Gender :
              </label>
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value="male"
                  name="gender"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-black">
                  Male
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value="female"
                  name="gender"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="inline-2-radio" className="ms-2 text-sm font-medium text-black">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-bforange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-bforange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign up
            </button>
          </div>
        </form>
        <Link to={"/login"}>
          <p className="mt-2 text-center text-sm text-gray-500">
            Existing user?{' '}
            <span className="font-semibold leading-6 text-bforange">
              Login
            </span>
          </p>
        </Link>
      </div>

      <div className="flex w-[25%] items-center gap-2 py-6 text-sm text-slate-600">
              <div className="h-px w-full bg-slate-400 mr-2"></div>
              OR
              <div className="h-px w-full bg-slate-400 ml-2"></div>
          </div>

          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
              <span>Continue with Google</span>
          </button>

          <ToastContainer />
    </div>
  );
}
