import { useContext } from "react"
import Child from "./Child"
import { userContext } from "../App"

const Parent = () => {
  const {name}=useContext(userContext)
    const getData=(data)=>{
        console.log("Received from Child:",data)
    }
  return (
    <div>
        <h1>From App.jsx:{name} </h1>
        <Child send={getData}/>
    </div>
  )
}
export default Parent