const Child = ({send}) => {
  return (
    <div>
        <button onClick={()=>send("hello from child")}>Click to send Data</button>
    </div>
  )
}
export default Child