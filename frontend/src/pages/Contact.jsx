import { useEffect, useState } from "react"
import axios from "axios"
const Contact = () => {
  const [users,setUsers]=useState([])

  const fetchData=async()=>{
    try {
      const res =await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (error) {
      console.log('Error:',error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <h1>Users</h1>
      {users.map((user)=>(
        <div key={user.id}>
              <h4>Name:{user.name}</h4>
              <h4>Email:{user.email}</h4><hr />
        </div>
      ))}
    </div>
  )
}
export default Contact