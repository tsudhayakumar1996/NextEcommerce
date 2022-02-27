import { FaTwitter } from "react-icons/fa"
import React,{useState} from "react"
import { FetchingPost } from "../fetcher/fetching"
import { APICommon } from "../commonAPI/api"

export default function Register () {

    const [setUser, setsetUser] = useState({
        "name":'',
        "email":'',
        "pass":'',
        "conpass":'',
    })       
    
    const inputChangehandler = (val,key) => {
        setsetUser({
            ...setUser,
            [key] : val,
        })
    }

    const registerHandler = async () => {
        if(setUser.name === "" || setUser.email === "" || setUser.pass === "" || setUser.conpass === ""){
            alert("Please enter the valid details")
        }
        else{
            if(setUser.pass === setUser.conpass){
                const response = await FetchingPost(APICommon.userPost,setUser)
                console.log(response)
            }else{
                alert("Passward did not match with Confirm password")
            }
        }                
    }

    return(
        <div className="loginBox">           
            <div className="text-center sideExpand">
                <FaTwitter style={{width:32,height:32}} />    
            </div>
            <div className="row no-margin loginCenter_align sideExpand">
                <label className="col-md-4">Name</label>
                <input className="col-md-8" placeholder="Name" onChange={(e)=>inputChangehandler(e.target.value,"name")}/>
            </div>
            <div className="row no-margin loginCenter_align sideExpand">
                <label className="col-md-4">Email Id</label>
                <input className="col-md-8" placeholder="Email" onChange={(e)=>inputChangehandler(e.target.value,"email")}/>
            </div>
            <div className="row no-margin loginCenter_align sideExpand">
                <label className="col-md-4">Create password</label>
                <input className="col-md-8" placeholder="New Password" onChange={(e)=>inputChangehandler(e.target.value,"pass")}/>
            </div> 
            <div className="row no-margin loginCenter_align sideExpand">
                <label className="col-md-4">Confirm password</label>
                <input className="col-md-8" placeholder="Re enter the Password" onChange={(e)=>inputChangehandler(e.target.value,"conpass")}/>
            </div>                 
            <div className="text-center sideExpand">
                <button className="loginBtn" onClick={()=>registerHandler()}>Thats it</button>                                  
            </div>                                                                       
        </div>
    )
}