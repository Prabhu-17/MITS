import { useState } from "react"

const Conditional = () => {
    const [isVisible,setIsVisible]=useState(true)
    return(
        <div>
            <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>
            {isVisible && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi deserunt dignissimos laudantium odit vero a tenetur fugit illum mollitia optio omnis rerum, sunt officiis. Beatae facere modi distinctio vitae similique!</p>}
        </div>
    )
}
export default Conditional