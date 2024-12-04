
import { useContext } from 'react'
import UserContext from './Context'

export const Profile = () => {
    const {user}= useContext(UserContext)
    if(!user) return <div>PLease Login</div>
  return (
   <div>
    <h1>welcome {user.username}</h1>
   </div>
  )
}
