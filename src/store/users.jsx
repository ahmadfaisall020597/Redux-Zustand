import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const useUsers = create(
    devtools((set) => ({
        users: [],
        fetch: async url => {
            const response = await axios.get(url)
            console.log("response", response);
            set({ users: await response.data })
        },
    }))
);

export default useUsers;