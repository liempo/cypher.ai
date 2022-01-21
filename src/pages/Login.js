import { useState, useEffect } from "react"
import UserAvatar from "../images/user-avatar-32.png"

function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useEffect(() => {
    if (isLoggedIn) {
      props.onlogin()
    }
  })
  return (
    <div class="min-h-screen bg-gray-100 flex items-center">
      <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div class="py-12 p-10 bg-white rounded-xl">
          <img
            className="w-32 h-32 m-auto  rounded-full"
            src={UserAvatar}
            width="32"
            height="32"
            alt="User"
          />

          <div class="mb-6">
            <label
              class="mr-4 text-lg font-semibold text-gray-700 font-bold inline-block mb-2"
              for="email"
            >
              Email address
            </label>
            <input
              type="email"
              class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="@email"
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
          </div>
          <div class="">
            <label
              class="mr-4 text-lg font-semibold text-gray-700 font-bold inline-block mb-2"
              for="password"
            >
              Password
            </label>
            <input
              type="password"
              class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
          </div>
          <span class="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">
            Forget password
          </span>
          <button
            class="w-full mt-6 text-indigo-50 text-lg font-semibold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300"
            onClick={() => {
              if (email == "admin" && password == "admin") {
                setIsLoggedIn(true)
              } else {
                alert("Tanginamo")
                setIsLoggedIn(false)
              }
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
