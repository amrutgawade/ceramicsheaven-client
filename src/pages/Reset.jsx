import React from 'react'
import { Link } from 'react-router-dom'

function Reset() {
  return (
    <main className="w-full flex flex-col items-center justify-center py-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img src="src\assets\frontend\assets\img\logo.svg" width={100} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Reset your account
            </h3>
            {/* <p className="">
              Don't have an account?{" "}
              <Link
                to="/"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Sign up
              </Link>
            </p> */}
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">OTP</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150">
            Send OTP
          </button>
          <div className="text-center">
            <span className="font-semibold">Already a User ? </span>
            <Link to="/login" className="text-red-600">
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Reset