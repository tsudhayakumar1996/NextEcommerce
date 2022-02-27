import { Test2 } from "../../forAPI/test2"

export default function handler(req, res) {  
    if(req.method === "GET") {
      res.status(200).json(Test2)
    }
    else if(req.method === "POST") {
        const name = req.body.val        
        const newObj = {"name":name}    
        Test2.push(newObj)    
        res.status(201).json(Test2)
    }
}