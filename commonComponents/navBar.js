import react,{useState} from "react"
import Link from "next/link"
import { FaTwitter,FaSearch,FaShoppingBag,FaRegHeart,FaRegUser } from "react-icons/fa"
import { useContext } from "react"
import { ProductsContext } from "../pages/_app"
import Login from "./login"
import Register from "./register"
import { useRouter } from "next/router"
import Cart from "./cart"

export default function NavBar () {
    const router = useRouter()
    const  contextVal  = useContext(ProductsContext)    
    const Products = contextVal.data  
    
    const showHandler = (key) => {
        contextVal.settopContext({...contextVal.topContext,
            [key]:true,
        })
    }

    return(
        <>
            <div className="nav_box">
                <div className="container-1200">
                    <div className="nav-row row no-margin">
                        <div className="col-md-1">
                            <FaTwitter style={{width:32,height:32}} />    
                        </div>  
                        <div className="col-md-3">                                                
                            <ul className="nav-productsList">
                                <li className="fullCap">
                                    <Link href={'/'}>
                                        <a href="">all</a>
                                    </Link>
                                </li>
                                {Products && Products.map((each,index)=>{
                                    return(
                                        <li key={index} className='fullCap'>
                                            <Link href={`/products/${each.id}`}>
                                                <a href="">{each.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="navSearchposition col-md-4">
                            <input placeholder="Search"></input>
                            <div className="navSearchabs">
                                <FaSearch />
                            </div>
                        </div> 
                        <div className="col-md-4 text-right">
                            <FaShoppingBag className="nav_userTasks" style={{fontSize:22}} onClick={()=>showHandler("showCart")}/>
                            <FaRegHeart className="nav_userTasks" style={{fontSize:22}} onClick={()=>router.push("/wishlists")}/>
                            <FaRegUser className="nav_userTasks" style={{fontSize:22}} data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>showHandler("showUser")}/>  
                        </div>                                                                                                                                                    
                    </div> 
                </div>
                {contextVal.topContext.showCart  &&
                    <Cart /> 
                }                
            </div>             
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{width:400,margin:"auto"}}>                                                   
                        <button style={{padding:10, marginLeft:'auto',position:'absolute',right:0,zIndex:1}} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>                        
                        <div className="modal-body no-padding">
                            {contextVal.topContext.showUser ?
                                <Login /> :
                                <Register /> 
                            }
                        </div>
                    </div>                       
                </div>
            </div>
        </>      
    )
}