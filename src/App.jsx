import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useUsers from './store/users'
import { Button } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/Ai";

function App() {
  const { users, fetch } = useUsers((state) => state);

  return (
    <>
      <div className='grid justify-items-center align-items-center bg-gray-700'>
        <div className="App">
          <Button className='bg-sky-300' rightIcon={<AiOutlineArrowRight />} colorScheme='teal' onClick={() => {
            fetch("https://jsonplaceholder.typicode.com/users")
          }}>
            call api
          </Button>
          {console.log("users", users)}
        </div>
      </div>
      <div>
        {users.map((result) => {
          return (
            <table class="table-auto">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{result.id}</td>
                  <td>{result.name}</td>
                  <td>{result.username}</td>
                </tr>
              </tbody>
            </table>
          )
        })}
      </div>
    </>
  )
}

export default App
