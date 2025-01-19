import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import Practise from "./Practise"
import { Me } from "./pages/Me"

function App() {
  return (
    <>
      <BrowserRouter  >
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/" element={<Navigate to={"/me"} replace/>}/>
          <Route path="/me" element={<Me/>}/>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App


{/* <div className="shadow flex flex-col justify-center h-full ml-4 rounded-3xl bg-slate-400 mt-1 mr-2 text-xl items-center">

<h2 className="font-bold p-6 text-4xl items-center">Heading</h2><br />

<h4 className="text-slate-500 text-md pt-1 px-4 pb-4">Sub Heading</h4><br />

<input type="text" placeholder="demo" className="text-sm font-medium text-left py-2 px-2 w-full rounded border border-slate-200"/><br /><br />

<button className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5">Submit</button><br />
</div> */}