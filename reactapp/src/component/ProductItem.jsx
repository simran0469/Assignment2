import "./ProductItem.css"
function ProductItem({name,email,phone,company,website,address,address1,address2,address3}){
    return(
        <div className="ProductItem">
            <div >
           <img  width="220px" height="220px" src="https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy" 
           alt="avatar" />
           </div>
           <div >
           <h2>{name}</h2>
           <p ><strong>Email: </strong>{email}</p>
           <p><strong>Phone: </strong>{phone}</p>
           <p><strong>Company: </strong>{company}</p>
           <p><strong>Website: </strong>{website}</p>
           <p><strong>Address: </strong>{address},{address1},{address2},{address3}</p>
           </div>
           
        </div>
       
    )
}
export default ProductItem