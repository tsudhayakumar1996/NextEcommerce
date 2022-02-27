import { FaTwitter } from "react-icons/fa"
import React,{useState, useContext} from "react"
import { FetchingUser } from "../fetcher/fetching"
import { APICommon } from "../commonAPI/api"
import { ProductsContext } from "../pages/_app"

export default function Login () {

    const contextVal = useContext(ProductsContext)    
       
    const [setUser, setsetUser] = useState({
        "name":'',
        "pass":'',
    })

    const [userDetails, setuserDetails] = useState({})
    console.log(userDetails,"after login user detials")

    const inputChangehandler = (val,key) => {
        setsetUser({
            ...setUser,
            [key] : val,
        })
    } 

    const loginHandler = async () => {
        const response = await FetchingUser(APICommon.userPost,setUser) 
        if(response.id) {            
            setuserDetails(response)
        }else{
            alert("Entered name or password is incorrect")
        }  
    }

    const registerHandler = () => {
        contextVal.settopContext({...contextVal.topContext,
            "showUser":false,
        })
    }

    return(        
        <div className="loginBox">           
            <div className="text-center sideExpand">
                <FaTwitter style={{width:32,height:32}} />    
            </div>
            <div className="row no-margin loginCenter_align sideExpand">
                <label className="col-md-4">User Name</label>
                <input className="col-md-8" placeholder="Enter Your Name" onChange={(e)=>inputChangehandler(e.target.value,"name")}/>
            </div>
            <div className="row no-margin loginCenter_align sideExpand">
                <label className="col-md-4">Password</label>
                <input className="col-md-8" placeholder="Enter Your Password" onChange={(e)=>inputChangehandler(e.target.value,"pass")}/>
            </div>                 
            <div className="text-center sideExpand">
                <button className="loginBtn" onClick={()=>loginHandler()}>Login</button>                                  
            </div> 
            <div className="text-center">
                <a onClick={()=>registerHandler()} style={{cursor:'pointer',color:'blue'}}>Register here</a>    
            </div> 
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                           <h5>You are Logged in as {userDetails.name}</h5>
                        </div>                       
                    </div>
                </div>
            </div>                                                                     
        </div>        
    )
}