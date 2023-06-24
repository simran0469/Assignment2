import styled from 'styled-components'; 
import "./ProductItem.css"
function ProductItem({name,email,phone,company,website,address,address1,address2,address3,username}){
    return(
        <DIV>
        <div className="ProductItem">
            <div >
           <img  width="220px" height="220px" src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
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
        </DIV>
       
    )
}
const DIV = styled.div`
@media (min-width:0px) and (max-width:900px){
    .ProductItem{
        display:flex;
        flex-direction: column;
        padding:5px 5px 5px 5px
    }
}

`
export default ProductItem