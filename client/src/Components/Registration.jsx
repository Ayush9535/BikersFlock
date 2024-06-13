import logo from "../assets/bflogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username,password,email,gender)
    const specialCharacterPattern = /[^a-zA-Z0-9]/;

    if (specialCharacterPattern.test(username)) {
      setErrorMessage('Username cannot contain special characters.');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-20"
          src={logo}
          alt="Your Company"
        />
        <h2 className="mt-5 text-center text-bforange text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create new account
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
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bforange sm:text-sm sm:leading-6"
              />
              {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
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
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bforange sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center justify-between">
              <label htmlFor="gender" className="block text-sm mr-10 font-medium leading-6 text-gray-900">
                Gender:
              </label>
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value="Male"
                  name="gender"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-black">
                  Male
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value="Female"
                  name="gender"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
        <Link to={"/"}>
          <p className="mt-10 text-center text-sm text-gray-500">
            Existing user?{' '}
            <span className="font-semibold leading-6 text-bforange">
              Login
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
