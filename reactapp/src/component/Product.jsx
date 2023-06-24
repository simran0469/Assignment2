import "./Product.css"
import ProductItem from "./ProductItem"
import { useEffect,useState } from "react"
import axios from  "axios"
let url="https://jsonplaceholder.typicode.com/users"
function Product(){
    const[data,setdata]=useState([])
    const getdata = () => {
        axios.get(url).then((res) => {
        console.log(res.data) 
        setdata(res.data)
        }).catch((err) => {
          console.log(err)
        })
      }
      useEffect(() => {
        getdata()
      }, [])
    return(
        <div className="container">
           
            <div className="Product">
            {data.map((item)=>(
             <ProductItem 
             key={item.id}
             username={item.username}
             name={item.name}
             email={item.email}
             phone={item.phone}
             company={item.company.name}
             website={item.website}
             address={item.address.street}
             address1={item.address.suite}
             address2={item.address.city}
             address3={item.address.zipcode}
             />
            ))}
            </div>
            
        </div>
    )
}
export default Product