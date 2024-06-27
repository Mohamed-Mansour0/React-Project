import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Settings() {
  return (
    <>
    <div className="container mx-auto">
<div className="flex">
    <div className="w-1/2">
        <h1>Hello from settings </h1>
        <ul>
            <li>
                <Link to="profile" >UserProfile</Link>
            </li>
            <li>
                <Link to="app">UserApp</Link>
            </li>
        </ul>
    </div>
    <div className="w-1/2 bg-red-400">

<Outlet/>

    </div>

</div>

    </div>
    </>
  )
}
