import Conditional from "../components/Conditional"
import Parent from "../components/Parent"
import User from "../components/User"
import Form from "../hooks/Form"
import State from "../hooks/State"

const Home = () => {
  return (
    <div>
      <Conditional/>
      <Form/>
      <State/>
      <Parent/>
      <User name="xyz" age={33} skills={["HTML","CSS","JS","JAVA"]}/>
    </div>
  )
}
export default Home