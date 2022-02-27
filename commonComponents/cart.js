import { FaShoppingBag,FaRegWindowClose } from "react-icons/fa"
import { useContext } from "react"
import { ProductsContext } from "../pages/_app"

export default function Cart () {

    const  contextVal  = useContext(ProductsContext)
    const cartHide = () => {
        contextVal.settopContext({...contextVal.topContext,
            "showCart":false,
        })
    }
    return(
        <>            
            <div className="cartBox">
                <div className="wishlistBox">
                    <h4 className="no-margin wishTitle">Cart</h4>
                    <div className="wishListfa_Heart">
                        <FaShoppingBag style={{fontSize:22,margin:10}} />                    
                    </div>  
                    <div style={{marginLeft:"auto"}}>
                        <FaRegWindowClose style={{fontSize:22,margin:10,cursor:"pointer"}} onClick={()=>cartHide()}/>
                    </div>
                </div>              
            </div>             
        </>
    )
}