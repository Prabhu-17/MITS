import { Link } from "react-router-dom"

const Services = () => {
  const products=[
    {id:1,name:'mobile',desc:'with call feature'},
    {id:2,name:'laptop',desc:'with high specs'},
    {id:3,name:'keyboard',desc:'with all keys'},
  ]
  return (  
    <div>
       <h1 className="font-extrabold w-100 text-center">Products</h1>
       {products.map((product)=>(
        <>
          <h3 className="font-bold">{product.name}</h3>
          <Link className="text-blue-400" to={`/services/${product.id}`}>View description</Link> 
        </>
       ))}
    </div>
  )
}
export default Services