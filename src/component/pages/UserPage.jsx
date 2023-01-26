import create from 'zustand';
import { devtools } from "zustand/middleware";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/Ai";


export default function UserPage() {
    const Users = create(
        devtools((set) => ({
            users: [],
            fetch: async url => {
                const response = await axios.get(url)
                console.log("response", response);
                set({ users: await response.data })
            },
        }))
    );
    const { users, fetch } = Users((state) => state);
    return (
        <div className='bg-gray-700'>
            <div className='grid justify-items-center align-items-center'>
                <Button className='bg-sky-600' rightIcon={<AiOutlineArrowRight />} colorScheme='teal' onClick={() => {
                    fetch("https://jsonplaceholder.typicode.com/users")
                }}>
                    call api
                </Button>
                {console.log("users", users)}
                {users.map((result) => {
                    return (
                        <div className='border border-indigo-600'>
                            {result.username}
                        </div>
                    )
                })}
            </div>
        </div>

    );
}
