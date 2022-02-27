import { users } from "../../forAPI/users"

export default function handler(req, res) {  
    if(req.method === "PUT") {        
        const name = req.body.val.name;        
        const pass = req.body.val.pass;
        const success = {status : "Success"}
        const failed = {status: "Failed"}
        const emailIdx = users.findIndex(each => each.name === name)         
        if (emailIdx >= 0 ) {                          
            if(users[emailIdx].pass === pass) {
                res.status(201).json(users[emailIdx])
            }else{
                res.status(400).json(failed)
            }   
        }             
    } 
    else if (req.method === "POST") {      
        const email = req.body.val.email;               
        const pass = req.body.val.pass;
        const id = Date.now();
        const name = req.body.val.name
        const newObj = 
            {
                "id":id,
                "name":name,
                "pass":pass,
                "email":email,                
            }
        users.push(newObj)
        res.status(201).json(users)
    }     
  }