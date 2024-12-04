/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContext from "./Context";

const UserContextProvider = ({children})=>{
    //children is div, which implies that whatever is coming just use it
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user ,setUser}}>
        {children}
        </UserContext.Provider>

    )

}
export default UserContextProvider;